import { type Locator, type Page} from "playwright"

export class PartnersPage {
    readonly page: Page
    readonly h1: Locator
    readonly headerMain: Locator

    constructor(page:Page) {
        this.page = page
        this.h1 = page.locator('h1')
        this.headerMain = page.getByRole('main')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'about/partners/')
    }
}