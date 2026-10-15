import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit About page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate About page present', async ({ aboutPage, page }) => {
        await aboutPage.goto()
        await expect (aboutPage.heading).toContainText('Meet Mizaic — healthcare')
    })
})