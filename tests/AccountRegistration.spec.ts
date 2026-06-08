/*
Test case for Account registration page
*/

import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomData } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homepage: Homepage;
let registerpage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    homepage = new Homepage(page);
    registerpage = new RegistrationPage(page);

})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
    await page.close();
})

test('User Registration', async () => {

    //Homepage and click on Register

    await homepage.clickMyAccount();
    await homepage.clickRegister();

    //Registration Page

    await registerpage.enterFirstname(RandomData.getFirstName());
    await registerpage.enterLastname(RandomData.getLastName());
    await registerpage.enterEmail(RandomData.getEmail());
    await registerpage.EnterTeleephone(RandomData.getPhoneNumber());

    const password = RandomData.getPassword();
    await registerpage.enterPassword(password);
    await registerpage.enterPasswordConfirm(password);

    await registerpage.clickPolicy();
    await registerpage.clickContinuebtn();

    const ConfirmMsg = await registerpage.getConfirmationMsg();
    expect(ConfirmMsg).toContain('Your Account Has Been Created!');

})