import { test, expect } from '@playwright/test';
import { services } from '../src/data/services';
import { site } from '../src/data/site';

test.describe('anantajna.com homepage', () => {
  test('loads with the correct title and meta description', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(new RegExp(site.person));
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /Cloud, DevOps/i);
  });

  test('renders the hero with primary call to action', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Platform Engineering');
    await expect(page.getByRole('link', { name: 'Get in touch' }).first()).toBeVisible();
  });

  test('shows all six consulting services', async ({ page }) => {
    await page.goto('/');
    const servicesSection = page.locator('#services');
    const cards = servicesSection.locator('article');
    await expect(cards).toHaveCount(services.length);
    for (const service of services) {
      await expect(
        servicesSection.getByRole('heading', { name: service.title, exact: true }),
      ).toBeVisible();
    }
  });

  test('has expertise, experience and contact sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#expertise')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('exposes the consulting email and links to LinkedIn', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: new RegExp(site.email) }).first()).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    );
    await expect(page.locator(`a[href="${site.linkedin}"]`).first()).toBeVisible();
  });

  test('emits structured data (JSON-LD) for SEO', async ({ page }) => {
    await page.goto('/');
    const ld = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(ld).toBeTruthy();
    const parsed = JSON.parse(ld!);
    expect(JSON.stringify(parsed)).toContain('ProfessionalService');
  });

  test('has no uncaught console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto('/');
    expect(errors).toEqual([]);
  });
});
