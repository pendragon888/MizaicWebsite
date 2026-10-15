import { LandingPage } from "@pages/landing/landing.page"
import { MediViewerPage } from "@pages/mediViewer/mediViewer.page"
import { LeoPage } from "@pages/leo/leo.page"
import { EdmsDeploymentPage } from "@pages/edmsDeployment/edmsDeployment.page"
import { ContactUsPage } from "@pages/contactUs/contactUs.page"
import { test as baseTest } from "@playwright/test"

type MyPages = {
    landingPage: LandingPage
    mediViewerPage: MediViewerPage
    leoPage: LeoPage
    edmsDeploymentPage: EdmsDeploymentPage
    contactUsPage: ContactUsPage
};

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
    contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page))
    },
});

export { expect } from "@playwright/test"