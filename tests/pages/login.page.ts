import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly otpFromAppButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel(/email|логин/i);
    this.passwordInput = page.getByLabel(/пароль|password/i);
    this.submitButton = page.getByRole('button', { name: /next|войти|log ?in/i });
    this.otpFromAppButton = page.getByRole('button', { name: 'Use OTP from the app' });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async selectOtpFromApp() {
    await expect(this.page.getByRole('heading', { name: 'Select verification method' })).toBeVisible();
    await this.otpFromAppButton.click();
  }

  async expectLoggedIn() {
    // TODO: заменить на реальный признак успешного логина
    await expect(this.page).not.toHaveURL(/login/);
  }
}
