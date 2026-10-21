import { type Locator, type Page} from "playwright"

export class LeoPage {
    readonly page: Page
    readonly main: Locator
    readonly headingClarityAndControl: Locator
    readonly bookADemoButton: Locator
    readonly howLeoIsUsedButton: Locator

    constructor(page:Page) {
        this.page = page
        this.main = page.getByRole('main')
        this.headingClarityAndControl = page.getByRole('heading', { name: 'Bring clarity and control to' })
        this.bookADemoButton = this.main.getByRole('button', { name: 'Book a demo' })
        this.howLeoIsUsedButton = page.getByRole('button', { name: 'See how LEO is being used in' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'leo/')
    }
}