// @ts-check
const { test, expect } = require('@playwright/test');


test('Login', async ({ page }) => {

    await page.goto('https://tbbt.rootcode.app/signin');

    await page.getByRole('textbox' , { name: 'email' }).fill('retester@spicysoda.com');
    await page.getByRole('textbox' , { name: 'password' }).fill('Sathya93.');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL("https://tbbt.rootcode.app/admin/dashboard" , { timeout: 50000 });
    console.log("Navigated and Filled the fields and redirected");

});



test('Creating a Leave Type - Happy Path', async ({ page }) => {
    await page.goto('https://tbbt.rootcode.app/signin');

    await page.getByRole('textbox' , { name: 'email' }).fill('retester@spicysoda.com');
    await page.getByRole('textbox' , { name: 'password' }).fill('Sathya93.');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL("https://tbbt.rootcode.app/admin/dashboard" , { timeout: 50000 });
    console.log("Navigated and Filled the fields and redirected");
  
    //Navigating to Leave Configs and Creating a new Leave Type


    //Entering the Leave Name

  await page.getByRole('button', { name: 'Leave', exact: true }).click();
  await page.getByRole('button', { name: 'Leave Configurations' }).click();
  await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations" , { timeout: 50000 });
  console.log("Navigated to Leave Configurations");

  
  await page.getByRole('button', { name: 'Add New Leave Type' }).click();
  await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations/configure-leave-type" , { timeout: 50000 });
  
  await page.getByPlaceholder('Enter leave type name').fill('Newest Leave');
  console.log("Typed the Leave Name");


      //Selecting an emoji


  await page.locator('div').filter({ hasText: /^Emoji \*Color \*$/ }).getByRole('button').nth(1).click();
  await page.getByLabel('grin', { exact: true }).click();
  console.log("Selected an emoji");


        //Selecting a color

  await page.locator('.MuiGrid-root > .MuiStack-root > div > div:nth-child(2)').click();
  console.log("Selected a color");


      //Entering the Leave Duration

  await page.locator('form div').filter({ hasText: 'Leave duration preferences *Half-dayLeaves can be applied as morning half or' }).getByRole('img').nth(2).click();
  await page.locator('form div').filter({ hasText: 'Leave duration preferences *Half-dayLeaves can be applied as morning half or' }).getByRole('img').nth(1).click();

  console.log("Duration selected as half days and full days");



      //Enabling the toggles

  await page.locator('div').filter({ hasText: /^Enable attachment$/ }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: /^Requires comment$/ }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: /^Attachment mandatory$/ }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: /^Allow auto approval$/ }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: /^Enable carry forward$/ }).getByRole('checkbox').check();
  console.log("Toggles enabled");


      //Defining carry forward 

  await page.getByPlaceholder('Enter the number of days').fill('2');

    //Saving the Changes

    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations" , { timeout: 50000 });
    console.log("LeaVe Type created and redirected to Leave Confogurations page");


 
});