import { test, expect } from '@playwright/test';

test('Navigate to DMHC Site', async ({ page }) => {
  const locator = page.locator('#Body');
  await page.goto('https://www.dmhc.ca.gov/');
  await expect(locator).toContainText(/Need help with your Health Plan?/);
  await page.getByRole('link', { name: 'File a Complaint' }).click();
  await page.getByLabel('File a Complaint').getByRole('link', { name: 'File a Complaint', exact: true }).click();
  await expect(locator).toContainText(/Independent Medical Review & Complaint Process/);
  await page.getByText('Submit Online (English / Español)').isVisible();  
  await page.getByTitle('Submit an IMR/Complaint Form Online (English)').click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'Online Independent Medical Review/Complaint Form Important Information – Please Read' }).isVisible();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByRole('heading', { name: 'Independent Medical Review (IMR)/Complaint Form' }).isVisible();
  await page1.getByText('This Notice Is Required By Law*').isVisible();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByRole('heading', { name: 'Independent Medical Review (IMR)/Complaint Form' }).isVisible();
  await page1.getByText('Independent Medical Review (IMR)/Complaint Form FREE: The IMR/Consumer Complaint').isVisible();
  await page1.getByLabel('First Name *').click();
  await page1.getByLabel('First Name *').fill('John');
  await page1.getByLabel('First Name *').press('Tab');
  await page1.getByLabel('Last Name *').fill('Summers');
  await page1.getByLabel('Last Name *').press('Tab');
  await page1.locator('#MainContent_MainContent_txtBirthDate').fill('08/11/1980');
  await page1.getByLabel('Male', { exact: true }).check();
  await page1.getByLabel('Street Address *').click();
  await page1.getByLabel('Street Address *').fill('121 A Street');
  await page1.getByLabel('Street Address *').press('Tab');
  await page1.getByLabel('City *').fill('Salinas');
  await page1.getByLabel('City *').press('Tab');
  await page1.getByLabel('State *').press('Tab');
  await page1.getByLabel('Zip *').fill('95125');
  await page1.getByLabel('Zip *').press('Tab');
  await page1.getByLabel('Primary Phone  # *').fill('4082121121')
  await page1.getByLabel('Primary Phone  # *').press('Tab');
  await page1.getByLabel('Secondary Phone  #').press('Tab');
  await page1.getByLabel('Email Address *').fill('johndoe@yahoo.com');
  await page1.getByLabel('Email Address *').press('Tab');
  await page1.getByLabel('Would you like communication/correspondence sent to this email? *').getByLabel('Yes').check();
  await page1.getByLabel('Would you like communication/correspondence sent to this email? *').getByLabel('Yes').press('Tab');
  await page1.getByLabel('Health Plan Name *').fill('Athem Blue Cross');
  await page1.getByLabel('Health Plan Name *').press('Tab');
  await page1.getByLabel('Patient’s Membership # *').fill('2131241121');
  await page1.getByLabel('Patient’s Membership # *').press('Tab');
  await page1.getByLabel('Employer').click();
  await page1.getByLabel('Employer').press('Tab');
  await page1.getByLabel('Do you want someone to help you with your complaint?  - If yes, please complete the attached \'Authorized Assistant Form.\' *').getByLabel('No').check();
  await page1.getByLabel('Do you want someone to help you with your complaint?  - If yes, please complete the attached \'Authorized Assistant Form.\' *').getByLabel('No').press('Tab');
  await page1.getByLabel('Do you have Medi-Cal? *').getByLabel('No').check();
  await page1.getByLabel('Do you have Medi-Cal? *').press('Tab');
  await page1.getByLabel('- If yes, have you filed a Request for a State Hearing?').isDisabled();
  await page1.getByRole('group', { name: 'Do you have Medicare or Medicare Advantage? *' }).getByLabel('No').check();
  await page1.getByLabel('Have you filed a complaint or grievance with your health plan? *').getByLabel('No').check();
  await page1.getByLabel('Do you want payment for a health care service that you already received? *').getByLabel('No').check();
  await page1.getByRole('group', { name: 'Do you want your health plan to pay for future services? *' }).getByLabel('No').check();
  await page1.getByLabel('What is your medical condition or doctor’s diagnosis? (Please be specific, 500 character limit) *').click();
  await page1.getByLabel('What is your medical condition or doctor’s diagnosis? (Please be specific, 500 character limit) *').fill('Hello there');
  await page1.getByLabel('What is your medical condition or doctor’s diagnosis? (Please be specific, 500 character limit) *').press('Tab');
  await page1.getByLabel('What medical treatment(s)/service(s) and/or medication(s) are you asking for? (Please be specific, 500 character limit) *').fill('Hello there');
  await page1.getByLabel('What medical treatment(s)/service(s) and/or medication(s) are you asking for? (Please be specific, 500 character limit) *').press('Tab');
  await page1.getByLabel('Did your health plan deny, delay, or modify your treatment?  *').getByLabel('No').check();
  await page1.getByRole('group', { name: '- If yes, please check the reason given: (Check one)' }).click();
  await page1.getByLabel('Have you seen any out-of-network providers for your condition? *').getByLabel('No').check();
  await page1.getByLabel('Briefly describe the problem you are having with your health plan. For example, explain if the problem is a denied treatment, an unpaid bill, trouble getting an appointment or medication, or if your coverage has been cancelled by the health plan. (2500 character limit) *').click();
  await page1.getByLabel('Briefly describe the problem you are having with your health plan. For example, explain if the problem is a denied treatment, an unpaid bill, trouble getting an appointment or medication, or if your coverage has been cancelled by the health plan. (2500 character limit) *').fill('Hello there');
  await page1.getByLabel('I have read and agree to the Medical Release statement above.').check();
  await page1.getByRole('checkbox', { name: 'Yes' }).check();
  await page1.getByLabel('I have read and agree to the \'Sign and Submit\' statement above. Enter Full Name.').click();
  await page1.getByLabel('I have read and agree to the \'Sign and Submit\' statement above. Enter Full Name.').fill('John Summers');
});