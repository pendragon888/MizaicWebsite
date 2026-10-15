import { type Locator, type Page} from "playwright"

export class EdmsDeploymentPage {
    readonly page: Page
    readonly heading: Locator
    readonly headerMain: Locator

    constructor(page:Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Mizaic Deployment' })
        this.headerMain = page.getByRole('main')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'deployment/')
    }
}