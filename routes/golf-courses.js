var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('golf-courses.ejs', {
        title: "Golf Courses",
        category: "golf-courses",
        meta: {
            description: "Discover Sarasota's best golf courses and country clubs. From championship courses to " +
                "beginner-friendly layouts, find the perfect golf experience in Sarasota.",
            keywords: "Sarasota golf courses, golf clubs Sarasota, championship golf, country clubs, golf lessons " +
                "Sarasota, golf memberships",
        }
    });
});

module.exports = router;
