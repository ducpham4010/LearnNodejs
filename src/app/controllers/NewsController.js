class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    details(req, res) {
        res.render('news_details')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send(`This is ${req.params.slug}`)
    }
}

module.exports = new NewsController;