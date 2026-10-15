import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Partners page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Partners page present', async ({ partnersPage, page }) => {
        await partnersPage.goto()
        await expect(partnersPage.h1).toContainText('Partners')
        await expect(partnersPage.headerMain).toContainText('Partnerships that drive NHS change')
    })
})