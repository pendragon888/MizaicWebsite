import { test as setup, expect } from '@fixtures/pages.fixture'
import path from 'path'

setup.describe('Smoke test web application', async () => {
    setup('Verify each page can be accessed', async ({ landingPage, navigationPage, mediViewerPage, leoPage, edmsDeploymentPage, aboutPage, teamPage, partnersPage, careersPage, bookADemoPage, insightsHubPage, contactUsPage,page }) => {
        await page.context().addCookies([{
            name: 'CookieConsent',
            value: '{stamp:%27kujc3vBNDBJDwkSHvKUqitwiu06hk6bIwzVP4d8DQcG7XhbDMgii6A==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:3%2Cutc:1792060561852%2Cregion:%27gb%27}',
            domain: 'www.mizaic.com',
            path: '/',
            httpOnly: false,
            secure: true,
            expires: Math.floor(Date.now() / 1000) + 3600
        }]);

        const authFile = path.join(__dirname, '../../playwright/.auth/cookies.json');
        await landingPage.goto()
        await page.context().storageState({ path: authFile });
        await expect(page).toHaveTitle('Mizaic | Smarter healthcare workflows, clearer patient records')
        await expect (landingPage.homeBannerMain).toBeVisible()
        await mediViewerPage.goto()
        await expect(page).toHaveTitle('MediViewer | The EDMS built for the NHS, by people from the NHS')
        await expect(mediViewerPage.main).toBeVisible()
        await leoPage.goto()
        await expect(page).toHaveTitle('LEO | Smarter referral management for NHS teams')
        await expect(leoPage.main).toBeVisible()
        await edmsDeploymentPage.goto()
        await expect(page).toHaveTitle('The blueprint to EDMS implementation success | Mizaic')
        await expect(edmsDeploymentPage.main).toBeVisible()
        await aboutPage.goto()
        await expect(page).toHaveTitle('About Mizaic | The healthcare transformation specialist')
        await expect(aboutPage.headingMain).toBeVisible()
        await teamPage.goto()
        await expect(page).toHaveTitle('Meet the team | Mizaic')
        await expect(teamPage.main).toBeVisible()
        await partnersPage.goto()
        await expect(page).toHaveTitle('Mizaic’s collaborations | Partner with us')
        await expect(partnersPage.headerMain).toBeVisible()
        await careersPage.goto()
        await expect(page).toHaveTitle('Careers  | Join the Mizaic team')
        await expect(careersPage.headerMain).toBeVisible()
        await bookADemoPage.goto()
        await expect(page).toHaveTitle('Book a demo | MediViewer™ powered by Mizaic')
        await expect(bookADemoPage.headerMain).toBeVisible()
        await insightsHubPage.goto()
        await expect(page).toHaveTitle('Insights Hub | Mizaic')
        await expect(insightsHubPage.h1).toBeVisible()
        await contactUsPage.goto()
        await expect(page).toHaveTitle('Contact Mizaic - the NHS Transformation specialists')
        await expect(contactUsPage.headerMain).toBeVisible()
        await navigationPage.navToAboutLink()
        await navigationPage.navToTeamLink()
        await navigationPage.navToPartnersLink()
        await navigationPage.navToCareersLink()
        await navigationPage.navToBookADemoLink()
    })
})