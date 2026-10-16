import { LandingPage } from "@pages/landing/landing.page"
import { MediViewerPage } from "@pages/mediViewer/mediViewer.page"
import { LeoPage } from "@pages/leo/leo.page"
import { EdmsDeploymentPage } from "@pages/edmsDeployment/edmsDeployment.page"
import { AboutPage } from "@pages/about/about/about.page"
import { TeamPage } from "@pages/about/team/team.page"
import { PartnersPage } from "@pages/about/partners/partners.page"
import { CareersPage } from "@pages/about/careers/careers.page"
import { BookADemoPage } from "@pages/about/bookADemo/bookADemo.page"
import { InsightsHubPage } from "@pages/insightsHub/insightsHub.page"
import { ContactUsPage } from "@pages/contactUs/contactUs.page"
import { test as baseTest } from "@playwright/test"

type MyPages = {
    landingPage: LandingPage
    mediViewerPage: MediViewerPage
    leoPage: LeoPage
    edmsDeploymentPage: EdmsDeploymentPage
    aboutPage: AboutPage
    teamPage: TeamPage
    partnersPage: PartnersPage
    careersPage: CareersPage
    bookADemoPage: BookADemoPage
    insightsHubPage: InsightsHubPage
    contactUsPage: ContactUsPage
}

export const test = baseTest.extend<MyPages>({
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page))
    },
    mediViewerPage: async ({ page }, use) => {
    await use(new MediViewerPage(page))
    },
    leoPage: async ({ page }, use) => {
    await use(new LeoPage(page))
    },
    edmsDeploymentPage: async ({ page }, use) => {
    await use(new EdmsDeploymentPage(page))
    },
    aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page))
    },
    teamPage: async ({ page }, use) => {
    await use(new TeamPage(page))
    },
    partnersPage: async ({ page }, use) => {
    await use(new PartnersPage(page))
    },
    careersPage: async ({ page }, use) => {
    await use(new CareersPage(page))
    },
    bookADemoPage: async ({ page }, use) => {
    await use(new BookADemoPage(page))
    },
    insightsHubPage: async ({ page }, use) => {
    await use(new InsightsHubPage(page))
    },
    contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page))
    },
})

export { expect } from "@playwright/test"