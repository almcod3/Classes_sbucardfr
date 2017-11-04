const puppeteer = require('puppeteer');

function rewardsApi() {
    
};


rewardsApi.prototype.checkRewards = async function (user, pass) {

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.starbucks.fr/account/signin', {
        waitUntil: 'load',
        slowMo: 200
    });

    await page.type('input[name=username]', user);
    await page.type('input[name=password]', pass);
    await page.click('button[type="submit"]');

    await page.waitForNavigation({
        waitUntil: 'load'
    });

    const links = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('p[class=rewards_info]'));
        return anchors.length ? true : false;
    });

    await browser.close();

    return links;
};

module.exports = rewardsApi;