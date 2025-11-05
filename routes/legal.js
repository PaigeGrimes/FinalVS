var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
    res.render('about.ejs', {
        title: "About Page" //this is title
    });
});

router.get('/privacy-policy', function(req, res, next) {
    res.render('privacy-policy.ejs', {
        title: "Privacy Policy" //this is title
    });
});

router.get('/terms-of-service', function(req, res, next) {
    res.render('terms-of-service.ejs', {
        title: "Terms of Service" //this is title
    });
});

module.exports = router;
