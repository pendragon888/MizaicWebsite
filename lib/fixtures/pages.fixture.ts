import { LandingPage } from "@pages/landing/landing.page"
import { MediViewerPage } from "@pages/mediViewer/mediViewer.page"
import { LeoPage } from "@pages/leo/leo.page"
import { ContactUsPage } from "@pages/contactUs/contactUs.page"
import { test as baseTest } from "@playwright/test"

type MyPages = {
    landingPage: LandingPage
    mediViewerPage: MediViewerPage
    leoPage: LeoPage
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
    contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page))
    },
});

export { expect } from "@playwright/test"