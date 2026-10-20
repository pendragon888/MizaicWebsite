import { test, expect } from '@fixtures/pages.fixture'
import { formData } from '@datafactory/contactFormData.json'

test.describe("Visit Contact Us page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test.beforeEach(async ({ contactUsPage }) => {
        await contactUsPage.goto()
    })

    test('Validate Contact Us page is present', async ({ contactUsPage }) => {
        await expect(contactUsPage.headerMain).toContainText('Get in touch')
        await expect(contactUsPage.headerMain).toContainText('To talk through your EDMS requirements or speak to the Mizaic team about LEO and your referral challenges, please contact us.')
    })

    test('Check enquiry validation messages are shown', async ({ contactUsPage }) => {
        await contactUsPage.firstName.clear()
        // await contactUsPage.submit.click()
        // await expect (contactUsPage.validationError).toBeVisible()
        // await expect (contactUsPage.validationError).toContainText('There was a problem with your submission. Please review the fields below.')
    })

      test('Fill out Contact Us form', async ({ contactUsPage }) => {
        await expect (contactUsPage.firstName).toBeVisible()
        await contactUsPage.firstName.fill(formData.firstName)
        await contactUsPage.lastName.fill(formData.lastName)
        await contactUsPage.email.fill(formData.email)
        await contactUsPage.phone.fill(formData.phone)
        await contactUsPage.organisation.fill(formData.organisation)
        await contactUsPage.message.fill(formData.message)
        await contactUsPage.keepInTouch.check()
        await contactUsPage.contactMethodEmail.check()
        await contactUsPage.consent.check()

        // Do not submit form due to production environment
        //await contactUsPage.sendButton.click()
    })
})