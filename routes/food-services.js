var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('food-services.ejs', {
        title: "Food Services",
        category: "food-services",
        meta: {
            description: "Discover Sarasota's best meal prep services, food delivery, and personal chefs. " +
                "From fitness-focused meal prep to luxury private dining experiences.",
            keywords: "Sarasota meal prep, food delivery Sarasota, personal chef Sarasota, Lakewood Ranch, Siesta Key, " +
                "local food services"
        }
    })
});

module.exports = router;
