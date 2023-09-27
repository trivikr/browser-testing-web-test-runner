import { playwrightLauncher } from "@web/test-runner-playwright";

export default {
  nodeResolve: true,
  files: ["src/**/*.spec.js"],
  browsers: [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "firefox" }),
    playwrightLauncher({ product: "webkit" }),
  ],
};
