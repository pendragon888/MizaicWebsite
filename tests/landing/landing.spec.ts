import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Landing page present', async ({ landingPage, page }) => {
        await landingPage.goto()
        await expect (landingPage.homeBannerMain).toContainText('The picture is clear with Mizaic')
   })
})