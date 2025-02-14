const express = require('express')
const router = express.Router()
// const { getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts } = require('../controllers/productController')

const news_controller = require('../app/controllers/NewsController')

router.use('/details', news_controller.details)
router.use('/:slug', news_controller.show)
router.use('/', news_controller.index)



module.exports = router