var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('med-spas.ejs', {
        title: "Med Spas",
        category: "med-spas",
        meta: {
            description: "Discover Sarasota's best med spas and wellness centers. From luxury aesthetic treatments to " +
                "advanced wellness services and expert injectors.",
            keywords: "Sarasota med spas, medical spas, Botox Sarasota, aesthetic treatments, wellness centers, laser treatments, anti-aging",
        }
    });
});

module.exports = router;
