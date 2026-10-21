import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit About page for Mizaic", () => {
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate About page present', async ({ aboutPage }) => {
        await aboutPage.goto()
        await expect (aboutPage.headingMain).toContainText('Meet Mizaic — healthcare')
        await expect(aboutPage.headingImplementation).toBeVisible()
        await expect(aboutPage.headingCorePrinciples).toBeVisible()
        await expect(aboutPage.main).toContainText('We are revolutionising the clinician : patient experience at the point of care, with an electronic document management system and clinical workflow automation platform built for the NHS, by a team that has worked in the NHS. So from easy to use technology, to the perfect change management programme delivered by people who have been there and done that for Trusts throughout the UK, we’re here to support you whatever your digital maturity.')
        await expect(aboutPage.main).toContainText('See the route through complexity. The enormity of digital projects cannot be underestimated within any hospital. But the route to better-connected care is a journey. And we know how to get you there.')
        await expect(aboutPage.main).toContainText('Love our work. Our people have varied backgrounds with extensive experience having worked for, in, or alongside the NHS. We’re passionate about our projects, customers, and results, and bring real humanity to our work.')
        await expect(aboutPage.main).toContainText('Work together to make an impact. With multiple stakeholders involved in any digital project, before you even consider the wider digital transformation ecosystem, collaboration is at the core of our approach.')
        await expect(aboutPage.main).toContainText('Dare to be the change. Groundbreaking transformation is needed to revolutionise the future of the NHS. But that’s exactly why we’re here. We know how to make a difference, and our product vision and roadmap will always look forward — never stand still.')
        await expect(aboutPage.main).toContainText('Keep communication clear. In a market full of acronyms and jargon, we use language everyone can understand, keep communication channels clear and open at all times, and share our learned experiences every step of the way.')
        await expect(aboutPage.main).toContainText('We exist to make sense of patient data and referral workflows. And as we work towards supporting a connected NHS, here are some important metrics of our own.These numbers are rapidly increasing too, with every scanned image, every pathway improved, every clinician trained, and every Trust onboarded.')
    })
})