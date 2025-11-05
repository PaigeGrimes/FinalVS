var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('movie-theaters.ejs', {
        title: "Movie Theaters",
        category: "movie-theaters",
        meta: {
            description: "Discover Sarasota's best movie theaters and cinemas. From luxury theaters with reclining seats" +
                " to IMAX experiences and independent film venues.",
            keywords: "Sarasota movie theaters, cinemas Sarasota, IMAX Sarasota, luxury theaters, independent films, " +
                "movie showtime",
        }
    });
});

module.exports = router;
