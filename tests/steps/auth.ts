import { Page } from '@playwright/test';
import { LoginPage } from '@pages/login.page';

export async function login(page: Page, email: string, password: string, otp: string): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(email, password);
  await loginPage.selectOtpFromApp();
  await loginPage.submitOtp(otp);
  await loginPage.expectLoggedIn();
}
