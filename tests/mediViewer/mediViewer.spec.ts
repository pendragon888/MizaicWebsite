import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit MediViewer page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Landing page present', async ({ mediViewerPage, page }) => {
        await mediViewerPage.goto()
        await expect (mediViewerPage.headerMain).toContainText('An EDMS built for the NHS')
   })
})