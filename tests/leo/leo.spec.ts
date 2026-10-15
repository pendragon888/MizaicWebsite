import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit LEO page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate LEO page present', async ({ leoPage, page }) => {
        await leoPage.goto()
        await expect (leoPage.headerMain).toContainText('Bring clarity and control to referral pathways')
        await expect (leoPage.headerMain).toContainText('Care pathways are under pressure, and referral processes are often manual, fragmented and prone to variation. Imagine if repetitive referral admin was automated, relevant patient information was brought together, referrals arrived complete and ready for review and operations teams had real-time visibility to identify bottlenecks. What difference could that make to patient flow and clinical time?Introducing LEO - your clinical workflow automation platform.')
    })
})