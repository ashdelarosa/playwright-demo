import { test, expect } from "@playwright/test";

test("should get a user", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/3"
  );
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.name).toBe("Clementine Bauch");
});
