import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit EDMS Deployment page for Mizaic", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate EDMS Deployment page present', async ({ edmsDeploymentPage }) => {
        await edmsDeploymentPage.goto()
        await expect (edmsDeploymentPage.heading).toContainText('Mizaic Deployment')
        await expect(edmsDeploymentPage.main).toContainText('We understand that the enormity of an EDMS project cannot be underestimated. However, we also believe passionately in the digitisation of the NHS and the multiple benefits of paperless hospital departments. So if you are just starting your digital transformation journey, talk to us. Virtually all our team has worked for, with or alongside NHS Trusts for a large proportion of their career — and it’s our goal to help revolutionise the patient : clinician experience at the point of care.')
        await expect(edmsDeploymentPage.alignButton).toBeVisible();
        await edmsDeploymentPage.alignButton.click();
        await expect(edmsDeploymentPage.main).toContainText('For many hospitals, this is where the hard work really begins. It’s also where Mizaic’s former NHS colleagues and digital transformation experts can add maximum value. Because yes, we’ll configure MediViewer to suit the exact requirements of your deployment. But we’ll also focus on the human element of the project — at every stage of the implementation — to mitigate risks and optimise engagement with the EDMS. This is how long-term benefits are truly realised, for clinicans and patients alike. As one team.')
        await expect(edmsDeploymentPage.transformButton).toBeVisible();
        await edmsDeploymentPage.transformButton.click();
        await expect(edmsDeploymentPage.main).toContainText('If we were to summarise the value that this phase brings, we’d call it ‘making life easier’. Because any digital, business or people transformation process is rich with opportunities and challenges. It’s Mizaic’s role to ensure we anticipate potential issues before they arise, involve people at the point they need to take part, and optimise factors that will lead to project success. That’s how we keep even the most complex deployments on track. We’re a safe pair of hands, who have ‘been there and done that’ ourselves, too.')
        await expect(edmsDeploymentPage.adaptBUtton).toBeVisible();
        await edmsDeploymentPage.adaptBUtton.click();
        await expect(edmsDeploymentPage.main).toContainText('Our goal is to leave no stone unturned when it comes to maximising your Trust’s readiness for change, yet we know it can still take time to adjust once MediViewer is live. Our future state stop-start-continue process clearly visualise what to expect, so nothing comes as a surprise, but we remain on hand every step of the way, for reassurance and guidance at every milestone. If something isn’t working, we’ll support you to look for alternatives, whether we provide the answer to a quick question when some simple confidence building is required, or an additional configuration to support the evolution of fundamental process changes.')
        await expect(edmsDeploymentPage.reviewButton).toBeVisible();
        await edmsDeploymentPage.reviewButton.click();
        await expect(edmsDeploymentPage.main).toContainText('Because we become so invested in our customers’ projects — and the teams at the heart of each deployment — we monitor Trusts’ use of MediViewer, from afar, even after ‘go live’. But we don’t just take a look at any tickets raised. We also hold a more structured post-implementation review on-site, spending time with the hospital’s product owner as well as other stakeholders, to evaluate their experiences to date and provide ongoing support where it’s needed. And if we learn anything that we haven’t heard or seen before, we’ll feed that back internally as it could help shape our future product roadmap.')
    })
})