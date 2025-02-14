const newRouter = require("./news")
const homeRouter = require("./site")

function route(app) {

    // app.post('/search', function (req, res) {
    //     console.log(req.body)
    //     res.send("done")
    // })

    app.use('/news', newRouter)
    app.use('/', homeRouter)

}

module.exports = route;