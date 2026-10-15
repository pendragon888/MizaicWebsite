import { type Locator, type Page} from "playwright"

export class BookADemoPage {
    readonly page: Page
    readonly h2: Locator
    readonly headerMain: Locator

    constructor(page:Page) {
        this.page = page
        this.h2 = page.locator('h2')
        this.headerMain = page.getByRole('main')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'book-a-demo/')
    }
}