const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// handlebars helpers
const {
  truncate,
} = require('./helpers/hbs');

const app = express();

// Load router
const index = require('./routes/index');
const about = require('./routes/about');
const myWork = require('./routes/myWork');
const contact = require('./routes/contact');
const services = require('./routes/services');
const my_contact = require('./routes/my_contact');


app.use('*/public', express.static('public'));

// Handlebars Middleware
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  LayoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  myWorkDir: __dirname + '/views/myWork',
  helpers: {
    truncate
  }
}));
app.set('view engine', 'hbs');

// Use routes
app.use('/', index);
app.use('/about', about);
app.use('/portfolio', myWork);
app.use('/contact', contact);
app.use('/services', services);
app.use('/myContact', my_contact);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
})
