import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto('https://thethirdfront.vercel.app/');
  await page.waitForNavigation({
    waitUntil: 'networkidle0',
  });
  const news = await page.evaluate(()=>{
    const head = document.querySelector('.heading-p');
    const heading = head.querySelector('h2').innerText;
    const par = head.querySelector('p').innerText;

    return {heading, par}
  });

  console.log(news);
})();