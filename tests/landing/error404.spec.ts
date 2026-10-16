import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Error 404 page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Error 404 page present', async ({ error404Page, page }) => {
        await error404Page.goto()
        await expect(page).toHaveTitle('404 | Mizaic')
        await expect (error404Page.main).toContainText("Oops. You might not have found the right page, but don't worry, we'll join the dots.")
    })
})