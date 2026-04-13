import { test, expect } from '@playwright/test';


test('Test Souce Demo', async ({ page }) => {
  await page.goto('https://sauce-demo.myshopify.com/');
  await page.getByRole('link', { name: 'Log In' }).click();
  await expect(page).toHaveURL(/login/);

  await page.goto('https://sauce-demo.myshopify.com/');
  await page.getByRole('link', { name: 'Grey jacket Grey jacket £' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.locator('#main-menu').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Noir jacket Noir jacket £' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'Check Out' }).click();
  await page.locator('a.checkout[href="/cart"]').click();
  await page.click('#checkout');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@testcompany.com');
  await page.getByRole('textbox', { name: 'First name (optional)' }).click();
  await page.getByRole('textbox', { name: 'First name (optional)' }).fill('Test');
  await page.getByRole('textbox', { name: 'Last name' }).click();
  await page.getByRole('textbox', { name: 'Last name' }).fill('User');
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('La PazTest');
  await page.locator('iframe[name="card-fields-number-pkxcsa2opzs00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
  await page.locator('iframe[name="card-fields-number-pkxcsa2opzs00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).fill('1234123412341234');
  await page.locator('iframe[name="card-fields-expiry-kn3vhcbtar000000"]').contentFrame().getByRole('textbox', { name: 'Expiration date (MM / YY)' }).click();
  await page.locator('iframe[name="card-fields-expiry-kn3vhcbtar000000"]').contentFrame().getByRole('textbox', { name: 'Expiration date (MM / YY)' }).fill('12 / 29');
  await page.locator('iframe[name="card-fields-verification_value-ftsk68tzxsg00000"]').contentFrame().getByRole('textbox', { name: 'Security code' }).click();
  await page.locator('iframe[name="card-fields-verification_value-ftsk68tzxsg00000"]').contentFrame().getByRole('textbox', { name: 'Security code' }).fill('777');
  await page.getByRole('button', { name: 'Pay now' }).click();
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('LaPaz');
  await page.getByRole('button', { name: 'Pay now' }).click();
  await expect(page.getByText('Your payment details couldn’t')).toBeVisible(); // Card details are validated, so we cannot proceed

});

