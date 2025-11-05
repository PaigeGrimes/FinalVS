var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('beaches.ejs', {
        title: "Beaches",
        category: "beaches",
        meta: {
            description: "",
            keywords: "",
        },
        category_description: "Explore Sarasota's world-famous beaches. Find the best beach access, amenities, activities, and hidden gems along the coast."
    });
});

module.exports = router;
