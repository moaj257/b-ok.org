const puppeteer = require('puppeteer');
const scrap = async ({url, selectors}) => {
  const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.setViewport({ height: 1080, width: 1920, deviceScaleFactor: 1 });
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if(['image', 'stylesheet', 'font', 'script'].indexOf(req.resourceType()) !== -1){ req.abort(); }
    else { req.continue(); }
  });
  await page.goto(`${url}`, {waitUntil: 'networkidle2'});
  let result = await page.evaluate(async (selectors) => {
    let resData = {};
    const getData = ({selector, isAttr, attr, iteration, data, keyValue, root, querySelector}) => {
      let selectr = document.querySelectorAll(`${root}`)[iteration].querySelector(`${selector}`);
      // selectr = selectr.length === 1 ? selectr[0] : selectr;
      if(isAttr && attr.length > 0) {
        attr.forEach(attribute => {
          data = {...data, [`${keyValue ? keyValue : attribute}`]: selectr ? selectr.getAttribute(`${attribute}`) : ''};
        });
      } else {
        data = {...data, [`${keyValue ? keyValue : 'text'}`]: selectr ? selectr.innerText : ''};
      }
      return data;
    };

    const queryCheck = s => document.createDocumentFragment().querySelector(s)

    const isSelectorValid = selector => {
      try { queryCheck(selector) } catch { return false }
      return true
    }

    const dataGrabber = async (selectors) => {
      await selectors.forEach(async ({set, keyValue}) => {
        console.log(set, keyValue);
        let res = [];
        await set.forEach(({selector, isAttr, attr, keyValue, root}) => {
          if(isSelectorValid(selector)) {
            let querySelectors = document.querySelectorAll(`${root}`);
            querySelectors && querySelectors.forEach((querySelector, i) => {
              let data = getData({selector, isAttr, attr, iteration: i, data: res[i] ? res[i] : {}, keyValue, root, querySelector});
              res[i] = data;
            });
          }
        });
        resData = {...resData, [keyValue]: res.length === 1 ? res[0] : res};
      });
      return resData;
    }

    let result = await new Promise(r => r(dataGrabber(selectors)));
    return result;
  }, selectors);

  // browser.close();

  return result;
};

module.exports = scrap;