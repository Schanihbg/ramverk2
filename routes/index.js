var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('home', {
        title: 'Home',
        urlPath: req.path
    });
});

router.get('/report', function(req, res) {
    res.render('report', {
        title: 'Report',
        urlPath: req.path
    });
});

router.get('/about', function(req, res) {
    res.render('about', {
        title: 'About',
        urlPath: req.path
    });
});

module.exports = router;
