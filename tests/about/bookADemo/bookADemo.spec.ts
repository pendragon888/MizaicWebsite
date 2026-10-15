import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Book A Demo page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Book A Demo page present', async ({ bookADemoPage, page }) => {
        await bookADemoPage.goto()
        await expect (bookADemoPage.h2).toContainText('Book a demo')
        await expect (bookADemoPage.headerMain).toContainText('From supporting individual departments in single Trusts, to complex multi-Trust environments with the most ambitious integrated care strategies, Mizaic’s priority remains the same — to revolutionise the clinician : patient experience.Looking to see our solutions in action? Explore MediViewer, our NHS-renowned EDMS, and LEO, our referral management solution, through a tailored demonstration designed to give you the insights you need. To get started simply complete the form below.')
    })
})