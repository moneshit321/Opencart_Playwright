import {Page,Locator} from '@playwright/test'

export class MyAccountPage{

    private readonly page:Page;
    private readonly hedAccountPage:Locator;

    constructor (page:Page){
        this.page=page;
        this.hedAccountPage=page.locator('h2:has-text("My Account")');

    }

    //Actions

    async isAccPageExist(): Promise<boolean> {
        try{
            const isVisible= await this.hedAccountPage.isVisible();
            return isVisible;
        }catch(error){
            console.log(`Error checking for Account Page visibility:${error}`);
            return false;
        }
    }
    
}