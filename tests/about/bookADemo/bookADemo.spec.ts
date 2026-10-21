import { test, expect } from '@fixtures/pages.fixture'
import { formData } from'@datafactory/contactFormData.json'

test.describe("Visit Book A Demo page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test.beforeEach(async ({ bookADemoPage}) => {
        await bookADemoPage.goto()
    })
    test('Validate Book A Demo page present', async ({ bookADemoPage }) => {
        await expect (bookADemoPage.h2).toContainText('Book a demo')
        await expect (bookADemoPage.main).toContainText('From supporting individual departments in single Trusts, to complex multi-Trust environments with the most ambitious integrated care strategies, Mizaic’s priority remains the same — to revolutionise the clinician : patient experience.Looking to see our solutions in action? Explore MediViewer, our NHS-renowned EDMS, and LEO, our referral management solution, through a tailored demonstration designed to give you the insights you need. To get started simply complete the form below.')
    })

    test('Fill out Book a demo form', async ({ bookADemoPage }) => {
        await expect (bookADemoPage.firstName).toBeVisible()
        await bookADemoPage.firstName.fill(formData.firstName)
        await bookADemoPage.lastName.fill(formData.lastName)
        await bookADemoPage.email.fill(formData.email)
        await bookADemoPage.phone.fill(formData.phone)
        await bookADemoPage.trustName.fill(formData.trustName)
        await bookADemoPage.message.fill(formData.message)
        await bookADemoPage.keepInTouch.check()
        await bookADemoPage.contactMethodEmail.check()
        await bookADemoPage.consent.check()

        // Do not submit form due to production environment
        //await bookADemoPage.sendButton.click()
    })
})