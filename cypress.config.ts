import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    ADMIN_EMAIL: "becanavarro2003@gmail.com",
    ADMIN_PASSWORD: "mati110511",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
