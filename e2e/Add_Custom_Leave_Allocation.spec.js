// @ts-check
const { test, expect } = require('@playwright/test');


test('Login', async ({ page }) => {

        await page.goto('https://tbbt.rootcode.app/signin');
    
        await page.getByRole('textbox' , { name: 'email' }).fill('retester@spicysoda.com');
        await page.getByRole('textbox' , { name: 'password' }).fill('Sathya93.');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL("https://tbbt.rootcode.app/admin/dashboard" , { timeout: 50000 });
        console.log("Navigated and Filled the fields and redirected");
    
        //Navigating to Leave Configs
    
        await page.getByRole('button', { name: 'Leave', exact: true }).click();
        await page.getByRole('button', { name: 'Leave Configurations' }).click();
        await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations" , { timeout: 50000 });
        console.log("Navigated to Leave Configs");


});

test('Add Custom Leave Allocation', async ({ page }) => {

    await page.goto('https://tbbt.rootcode.app/signin');

    await page.getByRole('textbox' , { name: 'email' }).fill('retester@spicysoda.com');
    await page.getByRole('textbox' , { name: 'password' }).fill('Sathya93.');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL("https://tbbt.rootcode.app/admin/dashboard" , { timeout: 50000 });
    console.log("Navigated and Filled the fields and redirected");
    await page.getByRole('button', { name: 'Leave', exact: true }).click();
    await page.getByRole('button', { name: 'Leave Configurations' }).click();
    await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations" , { timeout: 50000 });
    console.log("Navigated to Leave Configs");


        //Clicking on Custom Leave Allocations button

    await page.getByRole('button', { name: 'Add a custom leave allocation' }).click();

            //Verifying the Modal




});