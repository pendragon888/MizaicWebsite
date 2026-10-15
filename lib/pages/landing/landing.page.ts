import { type Locator, type Page} from "playwright"

export class LandingPage {
    readonly page: Page
    readonly homeBannerMain: Locator

    constructor(page:Page) {
        this.page = page
        this.homeBannerMain = page.getByRole('main')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }
}