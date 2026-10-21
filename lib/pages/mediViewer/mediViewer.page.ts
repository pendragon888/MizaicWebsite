import { type Locator, type Page} from "playwright"

export class MediViewerPage {
    readonly page: Page
    readonly main: Locator
    readonly headingEdms : Locator
    readonly headingMediviewer: Locator
    readonly seeAllFeaturesButton: Locator

    // Additional MediViewer modules section
    readonly headingAdditionalMediViewerModules: Locator
    readonly headingAccessRequestManager: Locator
    readonly armDatasheetButton: Locator
    readonly headingClinicalMediaManager: Locator
    readonly accessCaseStudyButton: Locator
    readonly nextSlideButton: Locator
    readonly previousSlideButton: Locator

    readonly headingMediviewerBenefits: Locator
    readonly assuredDeploymentModelButton: Locator

    constructor(page:Page) {
        this.page = page
        this.main = page.getByRole('main')
        this.headingEdms = page.getByRole('heading', { name: 'An EDMS built for the NHS' })
        this.headingMediviewer = page.getByRole('heading', { name: 'MediViewer\'s most popular' })
        this.seeAllFeaturesButton = page.getByRole('button', { name: 'See all features' })

        // Additional Mediviewer modules section
        this.headingAdditionalMediViewerModules = page.getByRole('heading', { name: 'Additional MediViewer modules' })
        this.headingAccessRequestManager = page.getByRole('heading', { name: 'Access Request Manager (ARM)' }).first()
        this.armDatasheetButton = page.getByRole('button', { name: 'Request the ARM Data Sheet' }).first()
        this.headingClinicalMediaManager = page.getByRole('heading', { name: 'Clinical Media Manager (CMM)' }).nth(1)
        this.accessCaseStudyButton = page.getByRole('button', { name: 'Access the case study' }).nth(1)
        this.nextSlideButton = page.getByRole('button', { name: 'Next slide' })
        this.previousSlideButton = page.getByRole('button', { name: 'Previous slide' })

        this.headingMediviewerBenefits = page.getByRole('heading', { name: 'MediViewer Benefits' })
        this.assuredDeploymentModelButton = page.getByRole('button', { name: 'Our Assured Deployment Model' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'mediviewer/')
    }
}