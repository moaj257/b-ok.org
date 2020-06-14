const puppeteer = require('puppeteer');
const scrap = async ({url, selectors}) => {
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']}); //,executablePath: '/usr/bin/google-chrome'
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

    const getAttrArr = (isAttr, attr, selectr, keyValue, data, selectorLen, multi, iter) => {
      if(isAttr && attr.length > 0) {
        attr.forEach(attribute => {
          let dtc = selectr ? (attribute === 'text' ? selectr.innerText : selectr.getAttribute(`${attribute}`)): '';
          let datap = data[`${keyValue ? keyValue : attribute}`] ? data[`${keyValue ? keyValue : attribute}`] : ((selectorLen > 1 || multi === true) ? [] : '');
          if(selectorLen > 1 || multi === true){
            console.log(data, attribute, '__0__');
            // datap[iter] = datap[iter] ? {...datap[iter], [attribute]: datap[iter] && datap[iter][attribute] ? [datap[iter][attribute], dtc] : dtc} : {[attribute]: dtc};
            datap[iter] = [];
            datap[iter][attribute] = datap[iter] && datap[iter][attribute] ? [datap[iter][attribute], dtc] : {[attribute]: dtc};
          }
          let dta = (selectorLen > 1 || multi === true) ? datap : dtc;
          console.log(data, dta, Object.keys(data).length, '__1__');
          // data = {...data, [`${keyValue ? keyValue : attribute}`]:  dta};
          data[`${keyValue ? keyValue : attribute}`] = dta;
        });
        console.log(data, '__2__');
      } else {
        // data = {...data, [`${keyValue ? keyValue : 'text'}`]: selectr ? selectr.innerText : ''};
        data[`${keyValue ? keyValue : 'text'}`] = selectr ? selectr.innerText : '';
      }
      console.log(data, '__3__');
      return data;
    };
    
    const getData = ({selector, isAttr, attr, iteration, data, keyValue, root, querySelector, multi}) => {
      let selectr = root ? document.querySelectorAll(`${root}`)[iteration].querySelectorAll(`${selector}`) : document.querySelectorAll(`${selector}`)[iteration];
      // console.log(root, selectr.length);
      selectr.constructor === Array || root ? selectr.forEach((c, i) => {
        data = getAttrArr(isAttr, attr, c, keyValue, data, selectr.length, multi, i);
      }) : data = getAttrArr(isAttr, attr, selectr, keyValue, data, selectr.length, multi, 0);
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
        await set.forEach(({selector, isAttr, attr, keyValue, root, multi}) => {
          if(isSelectorValid(selector)) {
            let querySelectors = document.querySelectorAll(`${root ? root : selector}`);
            querySelectors && querySelectors.forEach((querySelector, i) => {
              let data = getData({selector, isAttr, attr, iteration: i, data: res[i] ? res[i] : {}, keyValue, root, querySelector, multi});
              res[i] = data;
            });
          }
        });
        // resData = {...resData, [keyValue]: res.length === 1 ? res[0] : res};
        resData[keyValue] = res.length === 1 ? res[0] : res;
      });
      return resData;
    }

    let result = await new Promise(r => r(dataGrabber(selectors)));
    return result;
  }, selectors);

  browser.close();

  return result;
};

module.exports = scrap;