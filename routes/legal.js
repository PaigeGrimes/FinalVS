var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
    res.render('about.ejs', {
        title: "About Page",
        category: "about",
        meta: {
            description: "Learn about Vibing Sarasota - Your local guide to the best businesses and experiences in Sarasota, Florida",
            keywords: "About vibing sarasota"
        }
    });
});

router.get('/privacy-policy', function(req, res, next) {
    res.render('privacy-policy.ejs', {
        title: "Privacy Policy",
        category: "legal",
        meta: {
            description: "Learn privacy policy",
            keywords: "Privacy Policy"
        }
    });
});

router.get('/terms-of-service', function(req, res, next) {
    res.render('terms-of-service.ejs', {
        title: "Terms of Service",
        category: "legal",
        meta: {
            description: "Learn terms of Service",
            keywords: "Terms of Service"
        }
    });
});

module.exports = router;
