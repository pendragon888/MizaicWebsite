import { type Locator, type Page} from "playwright"

export class InsightsHubPage {
    readonly page: Page
    readonly h1: Locator
    readonly headerMain: Locator
    readonly search: Locator
    readonly emptyResults: Locator

    constructor(page:Page) {
        this.page = page
        this.h1 = page.locator('h1')
        this.headerMain = page.getByRole('main')
        this.search = page.getByRole('textbox', { name: 'Search...' })
        this.emptyResults = page.locator('astro-island')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'insights-hub/')
    }
}