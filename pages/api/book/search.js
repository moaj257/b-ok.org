const scrap = require('../../../scrapper/index');
export default async (req, res) => {
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
};