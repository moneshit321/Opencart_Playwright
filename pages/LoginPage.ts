import {Page, Locator} from '@playwright/test'

export class LoginPage{

    //Locators
    private readonly page:Page;
    private readonly txtEmailAddress: Locator;
    private readonly txtLoginPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly txtErrorMsg: Locator;

    constructor(page:Page){
        this.page=page;

        this.txtEmailAddress=page.locator('#input-email');
        this.txtLoginPassword=page.locator('#input-password');
        this.btnLogin=page.locator('input[class="btn btn-primary"]');
        this.txtErrorMsg=page.locator('.alert.alert-danger.alert-dismissible');
    }

    //Actions
    //Enter the E-mail in Login page
    async enterEmail(email:string){
       await this.txtEmailAddress.fill(email);
    }

    //Enter the Password in Login page
    async enterPass(Pass:string){
        await this.txtLoginPassword.fill(Pass);
    }

    //Click on the Login button
    async loginBtnClick(){
        await this.btnLogin.click();
    }

    async loginErrorMsg():Promise<null|string>{
        return (this.txtErrorMsg.textContent());
    }

}