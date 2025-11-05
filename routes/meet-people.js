var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('meet-people.ejs', {
        title: "Meet People",
        category: "meet-people",
        meta: {
            description: "Discover the best places to meet people in Sarasota. From solo-friendly venues and sports " +
                "leagues to networking events, art classes, and community activities for making new connections.",
            keywords: "Meet people Sarasota, social activities Sarasota, networking events, sports leagues, art classes," +
                " community events, solo activities, making friends Sarasota",
        }
    });
});

module.exports = router;
