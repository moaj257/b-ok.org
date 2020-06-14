const scrap = require('../scrapper/index');
const express = require('express');
const router = express.Router();

// &openInBrowser
router.get('/single/book/:bookId/:id', async function(req, res, next) {
  const {bookId, id} = req.params;
  let data = await scrap({
    url: `https://b-ok.org/book/${bookId}/${id}?dsource=mostpopular`,
    selectors: [
      {
        set:[
          { selector: 'h1[itemprop="name"]', attr: [], isAttr: false, keyValue: 'name' },
          { selector: 'div[itemprop="reviewBody"]', attr: [], isAttr: false, keyValue: 'desc' },
          { selector: '.bookProperty.property_categories .property_value', attr: [], isAttr: false, keyValue: 'category', root: '.col-sm-9' },
          { selector: '.bookProperty.property_year .property_value', attr: [], isAttr: false, keyValue: 'year', root: '.col-sm-9' },
          { selector: '.bookProperty.property_publisher .property_value', attr: [], isAttr: false, keyValue: 'publisher', root: '.col-sm-9' },
          { selector: '.bookProperty.property_language .property_value', attr: [], isAttr: false, keyValue: 'language', root: '.col-sm-9' },
          { selector: '.bookProperty.property_pages .property_value', attr: [], isAttr: false, keyValue: 'pages', root: '.col-sm-9' },
          { selector: '.bookProperty.property_isbn.10 .property_value', attr: [], isAttr: false, keyValue: 'isbn_10', root: '.col-sm-9' },
          { selector: '.bookProperty.property_isbn.13 .property_value', attr: [], isAttr: false, keyValue: 'isbn_13', root: '.col-sm-9' },
          { selector: '.bookProperty.property__file .property_value', attr: [], isAttr: false, keyValue: 'file', root: '.col-sm-9' },
          { selector: '.dlButton', attr: ['href'], isAttr: true, keyValue: 'link' },
          { selector: '.book-details-button .dropdown-menu a[target="_blank"]', attr: ['href'], isAttr: true, keyValue: 'previewLink' },
        ],
        keyValue: 'data',
      },
      {
        set:[
          { selector: '.brick.checkBookDownloaded a', attr: ['title', 'href'], isAttr: true, keyValue: '' },
          { selector: '.brick.checkBookDownloaded img', attr: ['src'], isAttr: true, keyValue: 'img' }
        ],
        keyValue: 'similar',
      }
    ]
  });
  res.json(data);
});

// https://b-ok.org/s/maths/?e=1&yearFrom=2017&yearTo=2020&language=english&extension=pdf
router.get('/search', async function(req, res, next) {
  const {q, page} = req.query;
  
  let data = await scrap({
    url: `https://b-ok.org/s/${q}?page=${page}`,
    selectors: [
      {
        set: [
          { selector: '.counter', attr: [], isAttr: false, keyValue: 'counter', root: '.resItemBox.resItemBoxBooks', multi: false },
          { selector: '.itemCover img', attr: ['data-src'], isAttr: true, keyValue: 'img', root: '.resItemBox.resItemBoxBooks', multi: false },
          { selector: '.itemCover a', attr: ['href'], isAttr: true, keyValue: 'link', root: '.resItemBox.resItemBoxBooks', multi: false },
          { selector: 'h3[itemprop="name"]', attr: [], isAttr: false, keyValue: 'title', root: '.resItemBox.resItemBoxBooks', multi: false },
          { selector: 'div[title="Publisher"] a', attr: ['href', 'text'], isAttr: true, keyValue: 'publiser', root: '.resItemBox.resItemBoxBooks', multi: true },
          { selector: '.authors a[itemprop="author"]', attr: ['href', 'text'], isAttr: true, keyValue: 'authors', root: '.resItemBox.resItemBoxBooks', multi: true },
          { selector: '.bookDetailsBox .bookProperty.property_year .property_value', attr: [], isAttr: false, keyValue: 'year', root: '.resItemBox.resItemBoxBooks', multi: false },
          { selector: '.bookDetailsBox .bookProperty.property_language .property_value', attr: [], isAttr: false, keyValue: 'language', root: '.resItemBox.resItemBoxBooks', multi: false },
          { selector: '.bookDetailsBox .bookProperty.property__file .property_value', attr: [], isAttr: false, keyValue: 'file', root: '.resItemBox.resItemBoxBooks', multi: false }
        ],
        keyValue: 'data',
      }
    ]
  });
  res.send(data);
});

module.exports = router;
