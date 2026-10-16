import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Insights Hub page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
        test.beforeEach(async ({ insightsHubPage }) => {
        await insightsHubPage.goto()
    })

    test('Validate Insights Hub page present', async ({ insightsHubPage, page }) => {
        await expect (insightsHubPage.h1).toContainText('Insights Hub')
    })

    test('Validate no results found for search term', async ({ insightsHubPage, page}) => {
        var searchTerm = 'abcde'
        await insightsHubPage.search.fill(searchTerm);
        await expect(page.getByRole('heading', { name: 'No results' })).toBeVisible();
        await expect(insightsHubPage.emptyResults).toContainText('No results');
    })

    test('Validate search returns a result', async ({insightsHubPage, page})  => {
        var searchTerm = 'NHS ConfedExpo 2026'
        await insightsHubPage.search.fill('NHS ConfedExpo 2026');
        await expect(page.getByRole('link', { name: searchTerm })).toBeVisible();
    })
})