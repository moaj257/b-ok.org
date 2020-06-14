const scrap = require('../../../scrapper/index');
export default async (req, res) => {
  let data = await scrap({
    url: 'https://b-ok.org',
    selectors: [
      {
        set: [
          { selector: 'a', attr: ['title', 'href'], isAttr: true, keyValue: '', root: '.brick.checkBookDownloaded'},
          { selector: 'img', attr: ['src'], isAttr: true, keyValue: 'img', root: '.brick.checkBookDownloaded' }
        ],
        keyValue: 'books',
      }
    ]
  });
  res.json(data);
};