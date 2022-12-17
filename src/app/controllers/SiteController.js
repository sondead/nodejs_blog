
class SiteController {
    
    // [GET] / (bai 17)
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;

const siteController = require('./SiteController');