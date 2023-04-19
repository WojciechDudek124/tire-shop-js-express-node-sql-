const express = require ("express");
require('express-async-errors')
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const {handleError} = require("./utils/errors");
const {homeRouter} = require("./routers/home");
const {tireRouter} = require("./routers/tire");
const {magazineRouter} = require("./routers/magazine");
require('./utils/db');
const {handlebarsHelpers} = require("./utils/handlebars-helpers");

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,

}))
app.use(express.static('public'));
app.use(express.json());

app.engine('.hbs', hbs.engine({
    extname:'.hbs',
    helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter)
app.use('/magazine', magazineRouter)
app.use('/tire', tireRouter)


app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000')
})