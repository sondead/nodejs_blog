const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newController.index;

router.get('/:slug', newsController.show);
router.get('/', newsController.index); // tuyến đường ở dưới gốc phải đưa xuống dưới cùng

module.exports = router;
