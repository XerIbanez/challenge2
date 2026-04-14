import test, { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fill(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }

    async getText(selector: string): Promise<string> {
        return await this.page.textContent(selector) || '';
    }

    async isVisible(selector: string): Promise<boolean> {
        return await this.page.isVisible(selector);
    }

    async waitForSelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
    }

    async getLocator(selector: string): Promise<Locator> {
        return this.page.locator(selector);
    }

    async takeScreenshot(name: string): Promise<void> {
        await this.page.screenshot({ path: `./screenshots/${name}.png` });
    }
}