import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`layout e acessibilidade em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('h1')).toHaveCount(1);
    expect(await page.locator('html').getAttribute('lang')).toBe('pt-BR');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const link of await page.locator('a[href^="#"]').all()) {
      const href = await link.getAttribute('href');
      expect(href).not.toBe('#');
      await expect(page.locator(href!)).toHaveCount(1);
    }
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.screenshot({ path: `test-results/site-${width}.png`, fullPage: true });
  });
}

test('menu mobile com teclado, Escape e navegação por âncora', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Pular para o conteúdo' })).toBeFocused();
  const toggle = page.locator('button[aria-controls="navigation"]');
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('navigation', { name: 'Navegação principal' }).getByRole('link', { name: 'Cuidados', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page.getByRole('navigation', { name: 'Navegação principal' }).getByRole('link', { name: 'Cuidados', exact: true }).click();
  await expect(page).toHaveURL(/#cuidados$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('FAQ nativo abre e fecha com teclado; contato ausente é honesto', async ({ page }) => {
  await page.goto('/');
  const question = page.locator('summary').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('details').first()).toHaveAttribute('open', '');
  await expect(page.locator('details').first().locator('p')).toBeVisible();
  await page.keyboard.press('Space');
  await expect(page.locator('details').first()).not.toHaveAttribute('open', '');
  await expect(page.locator('#contato')).toContainText('Os canais de atendimento serão disponibilizados aqui');
  await expect(page.locator('a[href*="wa.me"], form, a[href^="tel:"]')).toHaveCount(0);
});
