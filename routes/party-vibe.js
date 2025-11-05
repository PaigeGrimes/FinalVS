var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('party-vibe.ejs', {
        title: "Party Vibes",
        category: "party-vibe",
        meta: {
            description:"Discover Sarasota's best restaurants and bars with lively atmospheres. Find rooftop bars, live" +
                " music venues, sports bars, and trendy spots perfect for groups and celebrations.",
            keywords: "Sarasota bars, live music restaurants, rooftop bars Sarasota, sports bars, party restaurants, " +
                "group dining Sarasota, nightlife dining",
        }
    });
});

module.exports = router;
