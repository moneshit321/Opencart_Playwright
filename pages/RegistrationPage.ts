import { Page,expect,Locator } from "@playwright/test";

export class RegistrationPage{

//Locators
    private readonly page:Page
    private readonly txtFirstName:Locator
    private readonly txtLastName:Locator
    private readonly txtEmail:Locator
    private readonly txtTelephone:Locator
    private readonly txtPassword:Locator
    private readonly txtPasswordConfirm:Locator
    private readonly chkPolicy:Locator
    private readonly btnContinue:Locator
    private readonly msgConfirm:Locator

//Constructors

    constructor(page:Page){

        this.page = page;
        this.txtFirstName= page.locator('#input-firstname');
        this.txtLastName= page.locator('#input-lastname');
        this.txtEmail= page.locator('#input-email');
        this.txtTelephone= page.locator('#input-telephone');
        this.txtPassword= page.locator('#input-password');
        this.txtPasswordConfirm= page.locator('#input-confirm');
        this.chkPolicy=page.locator('input[type="checkbox"]');
        this.btnContinue= page.locator('input[value="Continue"]');
        this.msgConfirm= page.locator('h1:has-text("Your Account Has Been Created!")');
    }

//Actions

    //Enter the FirstName in the Registration form
    async enterFirstname(fName:string):Promise<void>{
        await this.txtFirstName.fill(fName);
    }

    //Enter the LirstName in the Registration form
    async enterLastname(lName:string):Promise<void>{
        await this.txtLastName.fill(lName);
    }
    //Enter the Email in the Registration form
    async enterEmail(eName:string):Promise<void>{
        await this.txtEmail.fill(eName);
    }

    //Enter the Telephone in the Registration form
    async EnterTeleephone(tName:string):Promise<void>{
        await this.txtTelephone.fill(tName);
    }

    //Enter the Password in the Registration form
    async enterPassword(pName:string):Promise<void>{
       await this.txtPassword.fill(pName);
    }

     //Enter the Password-Confirm in the Registration form
    async enterPasswordConfirm(cName:string):Promise<void>{
        await this.txtPasswordConfirm.fill(cName);
    }

     //Check the Policy in the Registration form
    async clickPolicy(){
        await this.chkPolicy.check();
    }

    //Click the Continue-Button in the Registration form
    async clickContinuebtn(){
        this.btnContinue.click();
    }

    //Click the Confirmation Message in the Registration form
    async getConfirmationMsg(){
        return await this.msgConfirm.textContent() ?? '';
    }

}