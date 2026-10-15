import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Careers page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Careers page present', async ({ careersPage, page }) => {
        await careersPage.goto()
        await expect (careersPage.h1).toContainText('Careers')
        await expect (careersPage.headerMain).toContainText('If you’re passionate about developing or implementing tech for good, have outstanding customer service standards, can drive successful digital transformation programmes, know a great deal about healthcare applications, or come from an NHS background, we want to hear from you..')
    })
})