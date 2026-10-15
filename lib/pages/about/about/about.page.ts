import { type Locator, type Page} from "playwright"

export class AboutPage {
    readonly page: Page
    readonly heading: Locator

    constructor(page:Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Meet Mizaic — healthcare' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'about/')
    }
}