import { Page } from '@playwright/test';
import { BasePage } from './base_page';

export class ItemPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async selectDropdownOption(selector: string, value: string): Promise<void> {
        await this.page.selectOption(selector, value);
    }

    async clickAddToCart(): Promise<void> {
        await this.page.click('input#add[type="submit"]');
    }
    async clickProduct(productName: string) {
        await this.page.getByRole('link', { name: productName }).click();
}
}