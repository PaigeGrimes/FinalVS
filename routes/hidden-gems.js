var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('hidden-gems.ejs', {
        title: "Hidden Gems",
        category: "hidden-gems",
        meta: {
            description: "Uncover Sarasota's unique dining, secret hangouts, and authentic experiences beyond the " +
                "tourist trail.",
            keywords:"Sarasota hidden gems, Sarasota secrets, Sarasota local recommended, Sarasota hangouts" ,
        }
    });
});

module.exports = router;
