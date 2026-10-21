import { type Locator, type Page} from "playwright"

export class EdmsDeploymentPage {
    readonly page: Page
    readonly heading: Locator
    readonly main: Locator
    readonly exploreButton: Locator
    readonly alignButton: Locator
    readonly transformButton: Locator
    readonly adaptBUtton: Locator
    readonly reviewButton: Locator

    constructor(page:Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Mizaic Deployment' })
        this.main = page.getByRole('main')
        this.exploreButton = page.getByRole('button', { name: 'Explore' })
        this.alignButton = page.getByRole('button', { name: 'Align' })
        this.transformButton = page.getByRole('button', { name: 'Transform' })
        this.adaptBUtton = page.getByRole('button', { name: 'Adapt' })
        this.reviewButton = page.getByRole('button', { name: 'Review' })

    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'deployment/')
    }
}