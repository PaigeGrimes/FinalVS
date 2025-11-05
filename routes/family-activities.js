var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('family-activities.ejs', {
        title: "Family Activities",
        category: "family-activities",
        meta: {
            description: "Discover Sarasota's best family-friendly attractions, from aquariums and animal parks to adventure courses and educational museums perfect for kids of all ages.",
            keywords: "Sarasota family activities, kids attractions Sarasota, family fun Sarasota, children's activities, Mote Marine, Ringling Museum, TreeUmph"
        }
    });
});

module.exports = router;
