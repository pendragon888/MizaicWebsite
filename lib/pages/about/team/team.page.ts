import { type Locator, type Page} from "playwright"

export class TeamPage {
    readonly page: Page
    readonly headerMain: Locator
    readonly h1: Locator

    constructor(page:Page) {
        this.page = page
        this.headerMain = page.getByRole('main')
        this.h1 = page.locator('h1')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'about/team/')
    }
}