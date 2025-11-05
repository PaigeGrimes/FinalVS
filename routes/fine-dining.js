var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('fine-dining.ejs', {
        title: "Fine Dining",
        category: "fine-dining",
        meta: {
            description: "Discover Sarasota's best fine dining restaurants for special occasions. From romantic " +
                "waterfront dining to award-winning chef-driven cuisine and premium steakhouses.",
            keywords: "Sarasota fine dining, romantic restaurants Sarasota, anniversary dinner, steakhouse Sarasota, " +
                "waterfront dining, special occasion restaurants"
        }
    });
});

module.exports = router;
