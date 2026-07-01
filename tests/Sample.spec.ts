import {test,expect} from '@playwright/test';

test('Sample Test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const AlertDialog = page.locator('#alertBtn');
    await AlertDialog.click();

    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.message();
        await dialog.accept();
    })

})
