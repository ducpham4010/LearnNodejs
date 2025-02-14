const morgan = require('morgan')
const { engine } = require('express-handlebars')
const express = require('express')
const sass = require('sass');
const path = require('path');
const route = require('./routes');

const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// app.get('/', function (req, res) {
//   return res.render('home');
// })

// app.get('/news', function (req, res) {
// return res.render('news');
// })

// app.post('/search', function (req, res) {
//   console.log(req.body)
// })

route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})