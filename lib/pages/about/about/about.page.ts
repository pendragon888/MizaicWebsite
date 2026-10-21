import { type Locator, type Page} from "playwright"

export class AboutPage {
    readonly page: Page
    readonly headingMain: Locator
    readonly headingImplementation: Locator
    readonly headingCorePrinciples: Locator
    readonly main: Locator

    constructor(page:Page) {
        this.page = page
        this.headingMain = page.getByRole('heading', { name: 'Meet Mizaic — healthcare' })
        this.main = page.getByRole('main')
        this.headingImplementation = page.getByRole('heading', { name: 'Implementation focused on' })
        this.headingCorePrinciples = page.getByRole('heading', { name: 'Our core principles and how' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'about/')
    }
}