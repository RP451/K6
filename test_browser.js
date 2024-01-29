import { browser } from 'k6/experimental/browser';
import { check } from 'k6';
import http from 'k6/http';

export const options = {
  scenarios: {
    browser: {
      executor: 'constant-vus',
      exec: 'browserTest',
      vus: 10,
      duration: '10s',
      options: {
        browser: {
          type: 'chromium',
        }
      }
    }
  },
};

export async function browserTest() {
  const page = browser.newPage();

  try {
    await page.goto('https://freshprints-web-staging.internal-fp.com/home');
  } 
  finally {
    page.close();
  }
}

export function news() {
  const res = http.get('https://freshprints-web-staging.internal-fp.com/home');
}
