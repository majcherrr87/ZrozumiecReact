import { test, expect } from "@playwright/test";

test("Test wygenerowany w VSC", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.goto("http://localhost:5173/kobieta");
  await page.getByRole("link", { name: "Obuwie" }).click();
  await page.getByRole("link", { name: "Sport" }).nth(2).click();
  await page.getByRole("link", { name: "Obuwie" }).nth(1).click();
  await page.getByRole("link", { name: "Odzież" }).nth(1).click();
  await page.getByRole("link", { name: "Biały Sweter 299zł" }).first().click();
  await page.locator("._mainPhoto_1yral_33").click();
  await page
    .locator("ul")
    .filter({ hasText: /^2$/ })
    .getByRole("link")
    .first()
    .click();
  await page
    .locator("ul")
    .filter({ hasText: "2" })
    .getByRole("link")
    .first()
    .click();
  await page.getByRole("link", { name: "2" }).click();
  await page
    .locator("ul")
    .filter({ hasText: "2" })
    .getByRole("link")
    .first()
    .click();
  await page.getByRole("link", { name: "Kobieta" }).click();
  await page.getByRole("combobox").selectOption("USD");
  await page.locator("ul").filter({ hasText: "2" }).click();
  await page.getByRole("combobox").selectOption("PLN");
  await page.getByRole("link", { name: "Mężczyzna" }).click();
  await page.getByRole("button", { name: "Sprawdź produkty" }).click();
  await page.getByRole("link", { name: "Dziecko" }).click();
});
