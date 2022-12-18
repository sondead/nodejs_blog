const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index); // tuyến đường ở dưới gốc phải đưa xuống dưới cùng

module.exports = router;
