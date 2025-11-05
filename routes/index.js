var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.ejs', {
        title: "Vibing Sarasota",
        category: "",
        meta: {
            description: "Discover Sarasota's best local businesses across 10 categories. Find food services, med spas, " +
                "golf courses, entertainment, beaches, and family activities recommended by locals.",
            keywords: "Sarasota businesses, local services, Sarasota restaurants, med spas, golf courses, movie " +
                "theaters, St Armands Circle, beaches, family activities"
        }
    });
});

module.exports = router;
