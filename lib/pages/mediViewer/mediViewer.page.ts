import { type Locator, type Page} from "playwright"

export class MediViewerPage {
    readonly page: Page
    readonly headerMain: Locator

    constructor(page:Page) {
        this.page = page
        this.headerMain = page.getByRole('main')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'mediviewer/')
    }
}