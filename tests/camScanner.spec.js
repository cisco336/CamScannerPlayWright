// @ts-check
import { test, expect, chromium } from "@playwright/test";
import path from "path";

test("has title", async ({ page, context }) => {
    test.setTimeout(0);
    const downloadFolderPath = path.join(__dirname, "");
    const browserContext = await chromium.launchPersistentContext(
        "/",
        {
            headless: false, // Set to true for headless mode
            acceptDownloads: true,
            downloadsPath: "Downloads/cm",
            slowMo: 500,
        },
    );
    page = await browserContext.newPage();
    page.on("download", (download) => {
        download.saveAs(
            `/${download.suggestedFilename()}`,
        );
    });
    await page.goto("file/manager");
    
    await page.getByPlaceholder("Please enter your email/phone").type("email");
    await page.getByText("Sign in").click({ force: true });
    await page
    .getByPlaceholder("Please enter password")
    .type("passwd");
    await page.getByText("Sign in").click({ force: true });
    await page.getByText("My document").click({ force: true });
    await page.waitForTimeout(3000);
    const rows = await page.locator(".files_row");

    for (let i = 0; i < await rows.count(); i++) {
        await rows.nth(i).hover();
        await page.waitForTimeout(1000);
        await rows
            .nth(i)
            .locator(".icon-ic_maintop_download")
            .click({ force: true });
        await page.waitForTimeout(300);
        await page.locator(".download_btn.pdf").click({ force: true });
        await page.waitForTimeout(1000);
        await page
        .locator(".btn.btn_green.save-btn", { hasText: 'Download' })
        .click({ force: true });
        // await page.pause();
        await page.waitForTimeout(3000);
        await page.locator(".pdf_dialog > .esc").click({ force: true });
        await page.waitForTimeout(300);
    }

    // rows.forEach(async l => {
    //     l.hover();
    // })

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/CamScanner/);
});