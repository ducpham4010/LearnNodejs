const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const sass = require('sass');
const path = require('path');

// import express from 'express';
// import path from 'path';
// import morgan from 'morgan';
// import { engine }  from 'express-handlebars';
// import { fileURLToPath } from 'url';

const input = `
h1 {
  font-size: 40px;
  code {
    font-face: Roboto Mono;
  }
}`;

const result = sass.compileString(input);
console.log(result.css);

const compressed = sass.compileString(input, {style: "compressed"});
console.log(compressed.css);

// // Lấy đường dẫn tuyệt đối của file hiện tại
// const __filename = fileURLToPath(import.meta.url);
// // Lấy thư mục chứa file hiện tại
// const __dirname = path.dirname(__filename);

console.log(__dirname);



const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
    return res.render('home');
})


app.get('/news', function (req, res) {
  return res.render('news');
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



// app.get('/home/1', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})