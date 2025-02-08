const express = require('express')
const app = express()
const port = 3000


app.get('/home', function (req, res) {
    var a = 1
    var b = 2
    var c = a + b

    return res.send('Hello World!')
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



// app.get('/home/1', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})