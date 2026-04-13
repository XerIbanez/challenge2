# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sauce.spec.ts >> Test Souce Demo
- Location: tests\sauce.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#checkout')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e5]:
        - search:
          - button "Submit" [ref=e6] [cursor=pointer]
          - textbox "Search" [ref=e7]
      - navigation [ref=e9]:
        - link "Search" [ref=e10] [cursor=pointer]:
          - /url: /search
        - link "About Us" [ref=e11] [cursor=pointer]:
          - /url: /pages/about-us
        - link "Log In" [ref=e12] [cursor=pointer]:
          - /url: /account/login
        - link "Sign up" [ref=e13] [cursor=pointer]:
          - /url: /account/register
      - generic [ref=e15]:
        - link "My Cart (1)" [ref=e16] [cursor=pointer]:
          - /url: "#"
          - text: My Cart
          - generic [ref=e17]: (1)
        - link "Check Out" [active] [ref=e18] [cursor=pointer]:
          - /url: /cart
    - generic [ref=e21]:
      - heading "Sauce Demo" [level=1] [ref=e23]:
        - link "Sauce Demo" [ref=e24] [cursor=pointer]:
          - /url: /
          - img "Sauce Demo" [ref=e25]
      - heading "Just a demo site showing off what Sauce can do." [level=3] [ref=e28]
  - generic [ref=e29]:
    - navigation [ref=e31]:
      - list [ref=e32]:
        - listitem [ref=e33]:
          - link "Home" [ref=e34] [cursor=pointer]:
            - /url: /
        - listitem [ref=e35]:
          - link "Catalog" [ref=e36] [cursor=pointer]:
            - /url: /collections/all
        - listitem [ref=e37]:
          - link "Blog" [ref=e38] [cursor=pointer]:
            - /url: /blogs/news
        - listitem [ref=e39]:
          - link "About Us" [ref=e40] [cursor=pointer]:
            - /url: /pages/about-us
        - listitem [ref=e41]:
          - link "Wish list" [ref=e42] [cursor=pointer]:
            - /url: "#sauce-show-wish-list"
        - listitem [ref=e43]:
          - link "Refer a friend" [ref=e44] [cursor=pointer]:
            - /url: "#sauce-show-refer-friend"
      - generic [ref=e45]:
        - link [ref=e46] [cursor=pointer]:
          - /url: http://www.facebook.com/shopify
        - link [ref=e47] [cursor=pointer]:
          - /url: http://www.twitter.com/sauce_io
        - link [ref=e48] [cursor=pointer]:
          - /url: http://www.instagram.com/shopify
        - link [ref=e49] [cursor=pointer]:
          - /url: http://www.pinterest.com/chrisjhoughton/awesome-facebook-integration/
        - link [ref=e50] [cursor=pointer]:
          - /url: /blogs/news.atom
    - generic [ref=e52]:
      - generic [ref=e53]:
        - link "Home" [ref=e55] [cursor=pointer]:
          - /url: /
        - text: —
        - generic [ref=e56]:
          - link "Frontpage" [ref=e57] [cursor=pointer]:
            - /url: /collections/frontpage
          - text: —
          - link "Noir jacket" [ref=e58] [cursor=pointer]:
            - /url: /products/noir-jacket
      - generic [ref=e59]:
        - img "Product Image" [ref=e61]
        - generic [ref=e63]:
          - heading "Noir jacket" [level=1] [ref=e64]
          - heading "£60.00" [level=2] [ref=e65]
          - generic [ref=e66]:
            - generic [ref=e67]:
              - generic [ref=e68]: Size
              - combobox "Size" [ref=e69]:
                - option "S" [selected]
                - option "M"
                - option "L"
            - generic [ref=e70]:
              - generic [ref=e71]: Color
              - combobox "Color" [ref=e72]:
                - option "Blue" [selected]
                - option "Red"
          - button "Add to Cart" [ref=e73] [cursor=pointer]
        - generic [ref=e75]:
          - text: This area is populated by the product description. If you ever run out of things to say about what you're selling then take a look at
          - link "9 ways to write compelling product descriptions" [ref=e76] [cursor=pointer]:
            - /url: http://www.shopify.ca/blog/8211159-9-simple-ways-to-write-product-descriptions-that-sell
          - text: . In Theme Settings you can also change render the product description to the write of the product images.
        - generic [ref=e77]:
          - heading "You Might Also Like..." [level=2] [ref=e78]
          - link "Grey jacket Grey jacket £55.00" [ref=e80] [cursor=pointer]:
            - /url: /collections/frontpage/products/grey-jacket
            - img "Grey jacket" [ref=e81]
            - heading "Grey jacket" [level=3] [ref=e82]
            - heading "£55.00" [level=4] [ref=e83]
          - link "Striped top Striped top £50.00" [ref=e85] [cursor=pointer]:
            - /url: /collections/frontpage/products/striped-top
            - img "Striped top" [ref=e86]
            - heading "Striped top" [level=3] [ref=e87]
            - heading "£50.00" [level=4] [ref=e88]
    - contentinfo [ref=e89]:
      - generic [ref=e90]:
        - navigation [ref=e92]:
          - heading "Footer" [level=2] [ref=e93]
          - link "Search" [ref=e94] [cursor=pointer]:
            - /url: /search
          - link "About Us" [ref=e95] [cursor=pointer]:
            - /url: /pages/about-us
        - generic [ref=e97]:
          - heading "About Us" [level=2] [ref=e98]
          - paragraph [ref=e100]:
            - strong [ref=e101]:
              - text: This is a demo site created for
              - link "Sauce" [ref=e102] [cursor=pointer]:
                - /url: http://sauceapp.io
            - text: ", an awesome new way to make your Shopify site social. Sauce allows you to let customers to share what they purchase to their friends, and see what their friends have purchased or \"wanted\" on your store."
        - generic [ref=e104]:
          - img "We accept Amex" [ref=e105]
          - img "We accept Visa" [ref=e106]
          - img "We accept Mastercard" [ref=e107]
      - generic [ref=e108]:
        - generic [ref=e110]:
          - text: Copyright © 2026 Sauce Demo.
          - link "Shopping Cart by Shopify" [ref=e111] [cursor=pointer]:
            - /url: https://www.shopify.co.uk/tour/shopping-cart?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore
          - text: .
        - navigation [ref=e113]:
          - link "Search" [ref=e114] [cursor=pointer]:
            - /url: /search
          - link "About Us" [ref=e115] [cursor=pointer]:
            - /url: /pages/about-us
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | test('Test Souce Demo', async ({ page }) => {
  5  |   await page.goto('https://sauce-demo.myshopify.com/');
  6  |   await page.getByRole('link', { name: 'Log In' }).click();
  7  |   await expect(page).toHaveURL(/login/);
  8  | 
  9  |   await page.goto('https://sauce-demo.myshopify.com/');
  10 |   await page.getByRole('link', { name: 'Grey jacket Grey jacket £' }).click();
  11 |   await page.getByRole('button', { name: 'Add to Cart' }).click();
  12 |   await page.locator('#main-menu').getByRole('link', { name: 'Home' }).click();
  13 |   await page.getByRole('link', { name: 'Noir jacket Noir jacket £' }).click();
  14 |   await page.getByRole('button', { name: 'Add to Cart' }).click();
  15 |   await page.getByRole('link', { name: 'Check Out' }).click();
  16 |   await page.locator('a.checkout[href="/cart"]').click();
> 17 |   await page.click('#checkout');
     |              ^ Error: page.click: Test timeout of 30000ms exceeded.
  18 |   await page.getByRole('textbox', { name: 'Email' }).click();
  19 |   await page.getByRole('textbox', { name: 'Email' }).fill('test@testcompany.com');
  20 |   await page.getByRole('textbox', { name: 'First name (optional)' }).click();
  21 |   await page.getByRole('textbox', { name: 'First name (optional)' }).fill('Test');
  22 |   await page.getByRole('textbox', { name: 'Last name' }).click();
  23 |   await page.getByRole('textbox', { name: 'Last name' }).fill('User');
  24 |   await page.getByRole('textbox', { name: 'Address' }).click();
  25 |   await page.getByRole('textbox', { name: 'Address' }).fill('La PazTest');
  26 |   await page.locator('iframe[name="card-fields-number-pkxcsa2opzs00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
  27 |   await page.locator('iframe[name="card-fields-number-pkxcsa2opzs00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).fill('1234123412341234');
  28 |   await page.locator('iframe[name="card-fields-expiry-kn3vhcbtar000000"]').contentFrame().getByRole('textbox', { name: 'Expiration date (MM / YY)' }).click();
  29 |   await page.locator('iframe[name="card-fields-expiry-kn3vhcbtar000000"]').contentFrame().getByRole('textbox', { name: 'Expiration date (MM / YY)' }).fill('12 / 29');
  30 |   await page.locator('iframe[name="card-fields-verification_value-ftsk68tzxsg00000"]').contentFrame().getByRole('textbox', { name: 'Security code' }).click();
  31 |   await page.locator('iframe[name="card-fields-verification_value-ftsk68tzxsg00000"]').contentFrame().getByRole('textbox', { name: 'Security code' }).fill('777');
  32 |   await page.getByRole('button', { name: 'Pay now' }).click();
  33 |   await page.getByRole('textbox', { name: 'City' }).click();
  34 |   await page.getByRole('textbox', { name: 'City' }).fill('LaPaz');
  35 |   await page.getByRole('button', { name: 'Pay now' }).click();
  36 |   await expect(page.getByText('Your payment details couldn’t')).toBeVisible(); // Card details are validated, so we cannot proceed
  37 | 
  38 | });
  39 | 
  40 | 
```