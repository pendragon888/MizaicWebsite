import { test, expect } from "@fixtures/pages.fixture";

test.describe('API smoke testing', async () => {
    test.describe.configure({ retries:1 })
    test('GET landingPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL!, {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET mediViewerPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'mediviewer', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET leoPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'leo', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET edmsDeploymentPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'deployment', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET aboutPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'about', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET teamPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'about/team', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET partnersPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'about/partners', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET careersPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'about/careers', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET bookADemoPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'book-a-demo', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET insightsHubPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'insights-hub', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET contactPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'contact-us', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET error404Page', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'invalid', {
        })

        expect(response.status()).toBe(404)
        const body = await response.body()
        expect(body).toBeTruthy()
    })
})