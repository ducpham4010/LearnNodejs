class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home')
    }

    // [GET/POST] /search
    search(req, res) {
        if (req.method === 'POST') {
            console.log('Nhận request POST:', req.path)
            res.send('Nhận request POST')
        } else {
            console.log('Nhận request GET:', req.path)
            res.render('search')
        }
        
    }
}

module.exports = new SiteController;