const Course = require('../models/Course');

class SiteController {
    // [GET] / (bai 17)
    index(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    courses,
                }),
            )
            .catch(next);

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const siteController = require('./SiteController');
