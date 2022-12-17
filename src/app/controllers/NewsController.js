
class NewsController {
    
    // [GET] /news (bai 17)
    index(req, res) {
        res.render('news');
    }

    // [GET] news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }

}

module.exports = new NewsController;

const newController = require('./NewsController');