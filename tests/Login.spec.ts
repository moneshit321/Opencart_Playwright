/*
Test case from Homepage -> login page -> MyAccountPage
*/

import {expect, test}from '@playwright/test'
import { Homepage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { MyAccountPage } from '../pages/MyAccountPage'
import { TestConfig } from '../test.config'

let homepage:Homepage;
let config:TestConfig;
let loginpage:LoginPage;
let accountpage:MyAccountPage;

test.beforeEach(async({page})=>{
    config =new TestConfig();
    await page.goto(config.appUrl)

    homepage= new Homepage(page);
    loginpage= new LoginPage(page);
    accountpage= new MyAccountPage(page);

})

test.afterEach(async({page})=>{
    await page.close();
})

test('User Login test', async({page})=>{

    //HomePage
    await homepage.clickMyAccount();
    await homepage.clickLogin();

    //LoginPage

    await loginpage.enterEmail(config.email);
    await loginpage.enterPass(config.password);
    await loginpage.loginBtnClick();

    //AccountPage -> Logged-In
   const isLoogedIn= await accountpage.isAccPageExist();
   expect(isLoogedIn).toBe(true);

})
