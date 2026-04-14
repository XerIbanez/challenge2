import { BasePage } from './base_page';
import { Page } from '@playwright/test';

export class LeftNavigation extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async isLinkEnabled(selector: string): Promise<boolean> {
        const link = this.page.locator(selector);
        const isDisabled = await link.evaluate((el: Element) => 
            (el as HTMLElement).hasAttribute('disabled') || 
            (el as HTMLElement).classList.contains('disabled')
        );
        return !isDisabled;
    }

    async isLinkDisabled(selector: string): Promise<boolean> {
        return !(await this.isLinkEnabled(selector));
    }
}