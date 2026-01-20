import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should display the home page', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Joeun' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible()
  })

  test('should navigate to dashboard', async ({ page }) => {
    await page.goto('/')

    await page.click('text=Dashboard')

    await expect(page).toHaveURL('/dashboard')
  })

  test('should navigate to login', async ({ page }) => {
    await page.goto('/')

    await page.click('text=Login')

    await expect(page).toHaveURL('/login')
  })
})
