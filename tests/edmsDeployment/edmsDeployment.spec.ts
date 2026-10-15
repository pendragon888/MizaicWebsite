import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit EDMS Deployment page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate EDMS Deployment page present', async ({ edmsDeploymentPage, page }) => {
        await edmsDeploymentPage.goto()
        await expect (edmsDeploymentPage.heading).toContainText('Mizaic Deployment')
    })
})