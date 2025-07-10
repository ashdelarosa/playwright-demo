# Playwright E2E Tests for SauceDemo

[![Playwright Tests](https://github.com/<YOUR_USERNAME>/<YOUR_REPO>/actions/workflows/playwright.yml/badge.svg)](https://github.com/<YOUR_USERNAME>/<YOUR_REPO>/actions/workflows/playwright.yml)

This project is a simple end-to-end (E2E) test suite for [SauceDemo](https://www.saucedemo.com), created with [Playwright](https://playwright.dev).

It demonstrates:
- Automated UI tests with Playwright
- Basic login, add-to-cart, and checkout flow
- Running tests locally and in Continuous Integration (CI) using [GitHub Actions](https://docs.github.com/en/actions)

---

## 📂 Project structure
.
├── tests/
│ ├── saucedemo.spec.ts # Main E2E test
├── playwright.config.ts # Playwright config
├── package.json # Node dependencies
├── .github/
│ └── workflows/
│ └── playwright.yml # CI workflow


---

## 🚀 How to run tests locally

1️⃣ Install dependencies:
```bash
npm install
