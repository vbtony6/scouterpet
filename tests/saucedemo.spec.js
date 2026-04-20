import { test, expect } from '@playwright/test';

test.describe('SauceDemo E2E', () => {

  test('Compra completa', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

});


// 🔥 BLOQUE DE PRUEBAS DE LOGIN (parametrizadas)

const users = [
  { user: 'standard_user', pass: 'secret_sauce', ok: true },
  { user: 'locked_out_user', pass: 'secret_sauce', ok: false },
];

test.describe('Login SauceDemo - múltiples usuarios', () => {

  for (const u of users) {

    test(`Login con ${u.user}`, async ({ page }) => {

      await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', u.user);
      await page.fill('#password', u.pass);
      await page.click('#login-button');

      if (u.ok) {
        await expect(page.locator('.inventory_list')).toBeVisible();
      } else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }

    });

  }

});