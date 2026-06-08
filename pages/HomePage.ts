import {Page,expect,Locator} from "@playwright/test";

export class Homepage{

//Locators
    private readonly page: Page;
    private readonly lnkMyAccount:Locator;
    private readonly lnkRegister:Locator;
    private readonly lnkLogin:Locator;
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;

//Constructor

    constructor(page:Page){

        this.page=page;
        this.lnkMyAccount= page.locator('span:has-text("My Account")');
        this.lnkRegister= page.locator('a:has-text("Register")');
        this.lnkLogin= page.locator('a:has-text("Login")');
        this.txtSearchbox= page.locator('input.form-control.input-lg');
        this.btnSearch= page.locator('span.input-group-btn');
    }

//Actions

    //HomePage
    async isHomepageExists(){
        let Title:string= await this.page.title();
        if(Title){
            return true;
        }
        return false;
    }

    //My Account
    async clickMyAccount(){
        try{
            await this.lnkMyAccount.click();
        }catch(error){
            console.log(`Exception Occured while clicking 'My Account': ${error}`);
            throw error;
        }  
    }

    //Register
    async clickRegister(){
        try{
            await this.lnkRegister.click();
        }catch(error){
            console.log(`Exception Occured while clicking 'Register': ${error}`);
            throw error;
        }
    }

    //Click Login
    async clickLogin(){
        try{
        await this.lnkLogin.click();
        }catch(error){
            console.log(`Exception Occured while clicking 'Login': ${error}`);
            throw error;
        }
    }

    //Enter the product name in SearchBox
    async enterProductName(pName:string){
        try{
        this.txtSearchbox.fill(pName);
        }catch(error){
            console.log(`Exception Occured while entering Product name: ${error}`);
            throw error;

        }
    }

    //Click the Search button
    async clickSearch(){
        try{
            await this.btnSearch.click();
        }catch(error){
            console.log(`Exception Occured while clicking 'Search button': ${error}`);
            throw error;
        }
    }

}