import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Team page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Team page present', async ({ teamPage }) => {
        await teamPage.goto()
        await expect(teamPage.h1).toContainText('Our leadership team')
        await expect (teamPage.main).toContainText('Mizaic’s investors have worked hard to form a leadership team who will steer the onward growth of the business, our Mizaic roadmap, and our customer success strategy, while staying true to the core values of our organisation.')
    })
})