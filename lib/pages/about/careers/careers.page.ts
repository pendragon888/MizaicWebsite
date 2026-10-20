import { type Locator, type Page} from "playwright"

export class CareersPage {
    readonly page: Page
    readonly h1: Locator
    readonly headerMain: Locator

    // Form fields
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly phone: Locator
    readonly uploadCVButton: Locator
    readonly message: Locator
    readonly keepInTouch: Locator
    readonly contactMethodPhone: Locator
    readonly contactMethodEmail: Locator
    readonly consent: Locator
    readonly applyNowButton: Locator

    constructor(page:Page) {
        this.page = page
        this.h1= page.locator('h1')
        this.headerMain = page.getByRole('main')

        // Form Fields
        this.firstName = page.getByRole('textbox', { name: 'First name*' })
        this.lastName = page.getByRole('textbox', { name: 'Last Name*' })
        this.email = page.getByRole('textbox', { name: 'Email*' })
        this.phone = page.getByRole('spinbutton', { name: 'Telephone' })
        this.uploadCVButton = page.getByRole('button', { name: 'Upload your CV' })
        this.message = page.getByRole('textbox', { name: 'Message' })
        this.keepInTouch = page.getByRole('checkbox', { name: 'I would like to receive' })
        this.contactMethodPhone = page.getByRole('checkbox', { name: 'Phone', exact: true })
        this.contactMethodEmail = page.getByRole('checkbox', { name: 'Email', exact: true })
        this.consent = page.getByRole('checkbox', { name: 'By completing and sending' })
        this.applyNowButton = page.getByRole('button', { name: 'Apply now' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!+'about/careers/')
    }
}