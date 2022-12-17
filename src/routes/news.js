const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController')

// newController.index;

router.use('/:slug', newsController.show);
router.use('/', newsController.index); // tuyến đường ở dưới gốc phải đưa xuống dưới cùng

module.exports = router;