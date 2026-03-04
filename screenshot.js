const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const sizes = [
    { name: 'iphone-se', width: 375, height: 667 },
    { name: 'iphone-14', width: 390, height: 844 },
    { name: 'iphone-14-pro-max', width: 430, height: 932 },
    { name: 'ipad-mini', width: 768, height: 1024 },
    { name: 'ipad-pro-11', width: 834, height: 1194 },
    { name: 'ipad-pro-13', width: 1024, height: 1366 },
    { name: 'laptop-13', width: 1280, height: 800 },
    { name: 'laptop-15', width: 1440, height: 900 },
    { name: 'desktop-1080p', width: 1920, height: 1080 },
  ];

  for (const size of sizes) {
    const context = await browser.newContext({
      viewport: { width: size.width, height: size.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    // Dismiss the overlay
    await page.goto('file:///Users/justin/Desktop/LT/homepage.html');
    await page.evaluate(() => {
      const overlay = document.getElementById('presentOverlay');
      if (overlay) overlay.remove();
    });
    await page.waitForTimeout(1500);

    // Full page screenshot
    await page.screenshot({
      path: `screenshots/${size.name}-full.png`,
      fullPage: true,
    });

    // Above the fold
    await page.screenshot({
      path: `screenshots/${size.name}-fold.png`,
    });

    console.log(`✓ ${size.name} (${size.width}x${size.height})`);
    await context.close();
  }

  await browser.close();
  console.log('Done!');
})();
