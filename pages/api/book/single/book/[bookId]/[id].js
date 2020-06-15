const scrap = require('../../../../../../scrapper/index');

export default async (req, res) => {
  let url = req.url.replace(/\/api\/book\/single\//s, '');
  console.log(url);
  let data = await scrap({
    url: `https://b-ok.org/${url}`,
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
          { selector: 'a[itemprop="image"] img', attr: ['src'], isAttr: true, keyValue: 'img' },
          { selector: '.dlButton', attr: ['href'], isAttr: true, keyValue: 'link' },
        ],
        keyValue: 'singleBook',
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
};