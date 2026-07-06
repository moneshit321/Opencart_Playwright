# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User Login test @master @sanity @regression
- Location: tests\Login.spec.ts:30:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Test source

```ts
  1  | /*
  2  | Test case from Homepage -> login page -> MyAccountPage
  3  | */
  4  | 
  5  | import {expect, test}from '@playwright/test'
  6  | import { Homepage } from '../pages/HomePage'
  7  | import { LoginPage } from '../pages/LoginPage'
  8  | import { MyAccountPage } from '../pages/MyAccountPage'
  9  | import { TestConfig } from '../test.config'
  10 | 
  11 | let homepage:Homepage;
  12 | let config:TestConfig;
  13 | let loginpage:LoginPage;
  14 | let accountpage:MyAccountPage;
  15 | 
  16 | test.beforeEach(async({page})=>{
  17 |     config =new TestConfig();
> 18 |     await page.goto(config.appUrl)
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  19 | 
  20 |     homepage= new Homepage(page);
  21 |     loginpage= new LoginPage(page);
  22 |     accountpage= new MyAccountPage(page);
  23 | 
  24 | })
  25 | 
  26 | test.afterEach(async({page})=>{
  27 |     await page.close();
  28 | })
  29 | 
  30 | test('User Login test @master @sanity @regression', async({page})=>{
  31 | 
  32 |     //HomePage
  33 |     await homepage.clickMyAccount();
  34 |     await homepage.clickLogin();
  35 | 
  36 |     //LoginPage
  37 | 
  38 |     await loginpage.enterEmail(config.email);
  39 |     await loginpage.enterPass(config.password);
  40 |     await loginpage.loginBtnClick();
  41 | 
  42 |     //AccountPage -> Logged-In
  43 |    const isLoogedIn= await accountpage.isAccPageExist();
  44 |    expect(isLoogedIn).toBe(true);
  45 | 
  46 | })
  47 | 
```