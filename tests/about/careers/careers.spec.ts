import { test, expect } from '@fixtures/pages.fixture'
import { formData } from'@datafactory/contactFormData.json'
import path from 'path'

test.describe("Visit Careers page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test.beforeEach(async ({ careersPage }) => {
        await careersPage.goto()
    })
    test('Validate Careers page present', async ({ careersPage }) => {
        await expect (careersPage.h1).toContainText('Careers')
        await expect (careersPage.headerMain).toContainText('If you’re passionate about developing or implementing tech for good, have outstanding customer service standards, can drive successful digital transformation programmes, know a great deal about healthcare applications, or come from an NHS background, we want to hear from you..')
    })

    test('Fill out Careers form', async ({ careersPage, page }) => {
        await expect(page.getByRole('heading', { name: 'Careers' })).toBeVisible();
        await expect(page.locator('h1')).toContainText('Careers');
        await expect(page.getByRole('main')).toContainText('If you’re passionate about developing or implementing tech for good, have outstanding customer service standards, can drive successful digital transformation programmes, know a great deal about healthcare applications, or come from an NHS background, we want to hear from you..');
        await expect(page.getByRole('textbox', { name: 'First name*' })).toBeVisible();
        await careersPage.firstName.fill(formData.firstName)
        await careersPage.lastName.fill(formData.lastName)
        await careersPage.email.fill(formData.email)
        await careersPage.phone.fill(formData.phone)

        //Upload CV
        const fileChooserPromiseCV = page.waitForEvent('filechooser');
        await careersPage.uploadCVButton.click();
        const fileChooserCV = await fileChooserPromiseCV;
        await fileChooserCV.setFiles(path.resolve('lib/files/Kevin Dang (QA SDET) CV.pdf'));
        await careersPage.message.fill(formData.message)
        await careersPage.keepInTouch.check()
        await careersPage.contactMethodEmail.check()
        await careersPage.consent.check()

        // Do not submit form due to production environment
        //await careersPage.applyNowButton.click()
    })
})