import { expect } from "@playwright/test";
import { type Locator, type Page } from "playwright";

export class NavigationPage {
    readonly page: Page
    readonly pageTitle: Locator
    readonly navToMediViewer: Locator
    readonly navToLEO: Locator
    readonly navToEDMSDeployment: Locator
    readonly navToAboutDropdown: Locator
    readonly navToAbout: Locator
    readonly navToTeam: Locator
    readonly navToPartners: Locator
    readonly navToCareers: Locator
    readonly navToBookADemo: Locator
    readonly navToInsightsHub: Locator
    readonly navToContact: Locator

    constructor(page: Page) {
        this.page = page
        this.pageTitle = page.getByTestId('page-title')
        this.navToMediViewer = page.getByRole('link', { name: 'MediViewer' })
        this.navToLEO = page.getByRole('link', { name: 'LEO' })
        this.navToEDMSDeployment = page.getByRole('link', { name: 'EDMS Deployment' })
        this.navToAboutDropdown = page.getByText('About').first()
        this.navToAbout = page.getByRole('button', { name: 'About' }).first()
        this.navToTeam = page.getByRole('button', { name: 'Team' }).first()
        this.navToPartners = page.getByRole('button', { name: 'Partners' })
        this.navToCareers = page.getByRole('button', { name: 'Careers' })
        this.navToBookADemo = page.getByRole('button', { name: 'Book a demo' }).first()
        this.navToInsightsHub = page.getByRole('link', {name: 'Insights Hub'})
        this.navToContact = page.getByRole('link', {name: 'Contact'})
        }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }

    async navToAboutLink(){
        await this.navToAboutDropdown.click()
        await this.navToAbout.click()
    }

    async navToTeamLink(){
        await this.navToAboutDropdown.click()
        //await this.navToAboutDropdown.click()
        await expect(this.navToTeam).toBeVisible()
        await this.navToTeam.click()
    }

    async navToPartnersLink(){
        await this.navToAboutDropdown.click()
        await this.navToPartners.click()
    }

    async navToCareersLink(){
        await this.navToAboutDropdown.click()
        await this.navToCareers.click()
    }

    async navToBookADemoLink(){
        await this.navToAboutDropdown.click()
        await this.navToBookADemo.click()
    }
}