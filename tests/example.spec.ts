import { test, expect } from '@playwright/test';

test('Homepage Screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  
  await page.screenshot({ 
    path: 'test-results/homepage-full.png',
    fullPage: true 
  });
  
  await expect(page).toHaveTitle(/Playwright/);
});

test('Element Screenshot', async ({ page }) => {
  await page.goto('https://example.com');
  
  await page.screenshot({ 
    path: 'test-results/example-page.png' 
  });
  
  await expect(page).toHaveTitle(/Example Domain/);
});

test('Multiple Screenshots', async ({ page }) => {
  await page.goto('https://github.com');
  
  // Screenshot vom ganzen Page
  await page.screenshot({ 
    path: 'test-results/github-full.png',
    fullPage: true 
  });
  
  // Screenshot nur Header
  const header = page.locator('header');
  await header.screenshot({ 
    path: 'test-results/github-header.png' 
  });
});
