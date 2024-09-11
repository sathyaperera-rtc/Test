
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

test('Manage Leave Entitlements - Viewing existing entitlements', async ({ page }) => {


    await page.goto('https://tbbt.rootcode.app/signin');

    await page.getByRole('textbox' , { name: 'email' }).fill('retester@spicysoda.com');
    await page.getByRole('textbox' , { name: 'password' }).fill('Sathya93.');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL("https://tbbt.rootcode.app/admin/dashboard" , { timeout: 50000 });
    
    //Navigating to Leave Configs

    await page.getByRole('button', { name: 'Leave', exact: true }).click();
    await page.getByRole('button', { name: 'Leave Configurations' }).click();
    await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations" , { timeout: 50000 });


        //Navigating to Manage Leave Entitlements page


  await page.getByRole('button', { name: 'Manage leave entitlements' }).click();
  await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations/bulkLeaves" , { timeout: 50000 });

          //Verify whether the CSV can be downloaded

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download CSV Template' }).click();
  const download = await downloadPromise;

            //Verify the search



            //Verify whether the CSV can be exported

  const download1Promise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export to csv' }).click();
  const download1 = await download1Promise;
});

test('Manage Leave Entitlements - Verify whether CSV file can be uploaded', async ({ page }) => {

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


        //Navigating to Manage Leave Entitlements page


  await page.getByRole('button', { name: 'Manage leave entitlements' }).click();
  await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations/bulkLeaves" , { timeout: 50000 });

// Uploading a correct CSV to the next year (next year must be vacant)
  await page.getByRole('button', { name: '2025' }).click();
  await page.getByRole('menuitem', { name: '2025' }).click();
  await page.getByText('Drag and drop your file or').click();

  await page.getByText('ConfirmCancel').click();
  await expect(page).toHaveURL("https://tbbt.rootcode.app/leave/leave-configurations" , { timeout: 50000 });


         
});