const express = require('express')
const PORT = process.env.PORT || 5000;
const app = express();
const mainRoute = require('./routes/index');
const bookRoute = require('./routes/book');

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', mainRoute)
  .use('/book', bookRoute)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));