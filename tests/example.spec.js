// // @ts-check
// import {setLocalStorage} from "../setLocalStorage";
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   setLocalStorage("E1D8E706DB0D4F6AD67t68g0");
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
