var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('st-armands.ejs', {
        title: "St. Armands",
        category: "st-armands",
        meta: {
            description: "Discover the best of St. Armands Circle - upscale shopping, fine dining, and unique " +
                "attractions in this iconic Sarasota destination with European flair.",
            keywords: "St. Armands Circle, Sarasota shopping, Lido Beach, Columbia Restaurant, Tommy Bahama, fine dining" +
                " Sarasota",
        }
    });
});

module.exports = router;
