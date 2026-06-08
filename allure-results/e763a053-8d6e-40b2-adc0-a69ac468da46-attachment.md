# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User Registration
- Location: tests\AccountRegistration.spec.ts:28:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | /*
  2  | Test case for Account registration page
  3  | */
  4  | 
  5  | import{test,expect} from '@playwright/test';
  6  | import { Homepage } from '../pages/HomePage';
  7  | import { RegistrationPage } from '../pages/RegistrationPage';
  8  | import { RandomData } from '../utils/randomDataGenerator';
  9  | import { TestConfig } from '../test.config';
  10 | 
  11 | let homepage:Homepage;
  12 | let registerpage:RegistrationPage;
  13 | let config:TestConfig;
  14 | 
  15 | test.beforeEach(async({page})=>{
  16 |     const config=new TestConfig();
  17 |     await page.goto(config.appUrl);
  18 |     homepage=new Homepage(page);
  19 |     registerpage= new RegistrationPage(page);
  20 |     
  21 | })
  22 | 
  23 | test.afterEach(async({page})=>{
  24 |     await page.waitForTimeout(5000);
  25 |     await page.close();
  26 | })
  27 | 
  28 | test('User Registration',async()=>{
  29 | 
  30 |     //Homepage and click on Register
  31 |     
  32 |     await homepage.clickMyAccount();
  33 |     await homepage.clickRegister();
  34 | 
  35 |     //Registration Page
  36 |    
  37 |     await registerpage.enterFirstname(RandomData.getFirstName());
  38 |     await registerpage.enterLastname(RandomData.getLastName());
  39 |     await registerpage.enterEmail(RandomData.getEmail());
  40 |     await registerpage.EnterTeleephone(RandomData.getPhoneNumber());
  41 | 
  42 |     const password=RandomData.getPassword();
  43 |     await registerpage.enterPassword(password);
  44 |     await registerpage.enterPasswordConfirm(password);
  45 | 
  46 |     await registerpage.clickPolicy();
  47 |     await registerpage.clickContinuebtn();
  48 | 
  49 |     const ConfirmMsg= await registerpage.getConfirmationMsg();
  50 |     expect(ConfirmMsg).toContain('Your Account Has Been Created!');
  51 | 
> 52 |      await page.waitForTimeout(5000);
     |      ^ ReferenceError: page is not defined
  53 | 
  54 | })
```