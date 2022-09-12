import puppeteer from 'puppeteer';

const logIn = async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 860})
    await page.goto('https://www.beecrowd.com.br/'); 
   
    await page.type('#email', 'not working yet');
    await page.type('#password', 'not working yet');

    await page.click('.submit');
}

logIn();