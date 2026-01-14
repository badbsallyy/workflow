
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers:  process.env.CI ? 1 : undefined,
  
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use:  {
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ... devices['Desktop Chrome'], screenshot: 'on' },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], screenshot: 'on' },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], screenshot: 'on' },
    },
  ],
});
