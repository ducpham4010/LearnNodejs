const express = require('express')
const router = express.Router()
// const { getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts } = require('../controllers/productController')

const home_controller = require('../app/controllers/SiteController')

router.use('/search', home_controller.search)
router.use('/', home_controller.index)

// router.post('/search', (req, res) => {
//     console.log(req.body)
//     res.send(`Đã nhận dữ liệu: ${JSON.stringify(req.body)}`);
// })


module.exports = router