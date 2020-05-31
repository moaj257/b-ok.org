const express = require('express');
const scrap = require('../scrapper/index');
const router = express.Router();

router.get('/ver', function(req, res, next) {
  res.json({ data: '1.0' });
});

router.get('/', async function(req, res, next) {
  let data = await scrap({
    url: 'https://b-ok.org',
    selectors: [
      {
        set: [
          { selector: 'a', attr: ['title', 'href'], isAttr: true, keyValue: '', root: '.brick.checkBookDownloaded'},
          { selector: 'img', attr: ['src'], isAttr: true, keyValue: 'img', root: '.brick.checkBookDownloaded' }
        ],
        keyValue: 'data',
      }
    ]
  });
  res.json(data);
});

router.get('/top', async function(req, res, next) {
  let data = await scrap({
    url: 'https://b-ok.org/popular.php',
    selectors: [
      {
        set: [
          { selector: 'a', attr: ['title', 'href'], isAttr: true, keyValue: '', root: '.brick.checkBookDownloaded'},
          { selector: 'img', attr: ['src'], isAttr: true, keyValue: 'img', root: '.brick.checkBookDownloaded' }
        ],
        keyValue: 'data',
      }
    ]
  });
  res.json(data);
});

module.exports = router;
