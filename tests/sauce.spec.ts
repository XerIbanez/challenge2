import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base_page';
import { LeftNavigation } from '../pages/left_navigation';
import { ItemPage } from '../pages/item';

const BASE_URL = 'https://sauce-demo.myshopify.com/';

test('Test Souce Demo', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.navigate(BASE_URL);
  const loginLink = await basePage.getLocator('a');
  await loginLink.filter({ hasText: 'Log In' }).click();
  //await page.getByRole('link', { name: 'Log In' }).click();
  await expect(page).toHaveURL(/login/);
  await basePage.navigate(BASE_URL);
  //await page.goto('https://sauce-demo.myshopify.com/');
  //const navigationPanel = new LeftNavigation(page);
  const links = await basePage.getLocator('a');
  const homeLink = await links.filter({ hasText: 'Home' });
  await homeLink.click();
  const item = new ItemPage(page);
  await item.clickProduct('Grey jacket');
  await item.clickAddToCart();
  //const homeLink = await basePage.getLocator('a');
  await homeLink.first().click();
  //await homeLink.filter({ hasText: 'Home' }).click();
  await item.clickProduct('Noir jacket');
  await item.clickAddToCart();
  await basePage.click('a.checkout');

  /*
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
  */
});

