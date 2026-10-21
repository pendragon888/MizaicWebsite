import { type Locator, type Page} from "playwright"

export class BookADemoPage {
    readonly page: Page
    readonly h2: Locator
    readonly main: Locator

    // Form Fields
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly phone: Locator
    readonly trustName: Locator
    readonly message: Locator
    readonly keepInTouch: Locator
    readonly contactMethodPhone: Locator
    readonly contactMethodEmail: Locator
    readonly sendButton: Locator
    readonly consent: Locator

    constructor(page:Page) {
        this.page = page
        this.h2 = page.locator('h2')
        this.main = page.getByRole('main')

        // Form Fields
        this.firstName = page.getByRole('textbox', { name: 'First name*' })
        this.lastName = page.getByRole('textbox', { name: 'Last Name*' })
        this.email = page.getByRole('textbox', { name: 'Email*' })
        this.phone = page.getByRole('spinbutton', { name: 'Phone number' })
        this.trustName = page.getByRole('textbox', { name: 'Trust name' })
        this.message = page.getByRole('textbox', { name: 'Message' })
        this.keepInTouch = page.getByRole('checkbox', { name: 'I would like to receive' })
        this.contactMethodPhone = page.getByRole('checkbox', { name: 'Phone', exact: true })
        this.contactMethodEmail = page.getByRole('checkbox', { name: 'Email', exact: true })
        this.consent = page.getByRole('checkbox', { name: 'By completing and sending' })
        this.sendButton = page.getByRole('button', { name: 'Submit', exact: true })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'book-a-demo/')
    }
}