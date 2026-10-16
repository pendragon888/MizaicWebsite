import { type Locator, type Page} from "playwright"

export class Error404Page {
    readonly page: Page
    readonly main: Locator

    constructor(page:Page) {
        this.page = page
        this.main = page.getByRole('heading', { name: 'Oops. You might not have' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'invalid')
    }
}