import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit MediViewer page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test.beforeEach(async ({ mediViewerPage }) => {
        await mediViewerPage.goto()
    })

    test('Validate MediViewer page present', async ({ mediViewerPage}) => {
        await expect(mediViewerPage.main).toContainText('An EDMS built for the NHS')
        await expect(mediViewerPage.main).toContainText('Our vision is to enable healthcare providers to leverage the true power of patient data. Delivering secure, searchable and connected medical records - via an intuitive, scalable digital library - marks the beginning of this transformative journey.')
        await expect(mediViewerPage.main).toContainText('Trusted by the NHS For ten years and counting, MediViewer has been the EDMS of choice for acute and mental health NHS Trusts across the UK.That means billions of physical, unstructured legacy medical records from multiple systems have already been transformed into organised, searchable and shareable digital content. Used by more than 100,000 clinicians and supporting over 20 million patients, MediViewer is helping NHS Trusts unlock the value of patient information Explore our projects')
        await expect(mediViewerPage.headingMediviewer).toBeVisible()
        await expect(mediViewerPage.seeAllFeaturesButton).toBeVisible()
        await expect(mediViewerPage.headingMediviewerBenefits).toBeVisible()
        await expect(mediViewerPage.assuredDeploymentModelButton).toBeVisible()
    })

    test('Validate Additional MediViewer modules content', async ({ mediViewerPage }) => {
        await expect(mediViewerPage.main).toContainText('An EDMS built for the NHS')
        await expect(mediViewerPage.headingAccessRequestManager).toBeVisible()
        await expect(mediViewerPage.main).toContainText('Remove the complexity, breach risk, and admin burden of data access requests, and complete this labour-intensive process in minutes not days. Developed in collaboration with CIOs, health records and SAR specialists, MediViewer\'s ARM module automates workflows, centralises data access, simplifies the review process, and generates a shareable output to complete the request - all while tracking progress on a visual dashboard. Your team deserves to concentrate on vital hospital work, not paperwork.')
        await expect(mediViewerPage.armDatasheetButton).toBeVisible()
        await mediViewerPage.nextSlideButton.click()
        await expect(mediViewerPage.headingClinicalMediaManager).toBeVisible()
        await expect(mediViewerPage.accessCaseStudyButton).toBeVisible()
        await mediViewerPage.previousSlideButton.click()
        await expect(mediViewerPage.headingAccessRequestManager).toBeVisible()
    })
})