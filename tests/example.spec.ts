import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Get started" }).click();
  await expect(page.locator("h1")).toContainText("Installation");
  await expect(
    page.getByRole("code").filter({ hasText: "npm init playwright@latest" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Playwright logo Playwright" }).click();
  await expect(page.locator("h1")).toMatchAriaSnapshot(
    `- heading "Playwright enables reliable end-to-end testing for modern web apps." [level=1]`
  );
});
