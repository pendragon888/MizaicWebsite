import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Partners page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Partners page present', async ({ partnersPage }) => {
        await partnersPage.goto()
        await expect(partnersPage.h1).toContainText('Partners')
        await expect(partnersPage.main).toContainText('Partnerships that drive NHS change')
        await expect(partnersPage.main).toContainText('Mizaic’s EDMS — MediViewer — has been wholly designed to enable transformational change in the NHS. And as its reputation has grown, so too have the many deployment options for our revolutionary technology. ')
    })
})