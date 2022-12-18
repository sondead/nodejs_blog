const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index); // tuyến đường ở dưới gốc phải đưa xuống dưới cùng

module.exports = router;
