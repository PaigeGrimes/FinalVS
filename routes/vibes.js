const express = require('express');
const router = express.Router();

const vibesSchema = require("../models/vibing");
const shareVibesSchema = require("../models/vibe-share");

router.post('/vibing-it', async (req, res) => {
    const businessId = req.body.businessId;
    try {
        const result = await vibesSchema.findOneAndUpdate({id: businessId}, {$inc: {vibe_count: 1}},  { new: true, upsert: true } );

        res.status(200).json({ vibe_count: result.vibe_count });
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const results = await vibesSchema.findOne({id: id});
        if (!results) {
            return res.status(404).json({ vibe_count: 0 });
        }
        res.json({ vibe_count: results.vibe_count });
    }catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
})

router.post('/share', async (req, res) => {
    const loveWant = req.body.love_or_want;
    const visitorType = req.body.visitor_type;
    const activity = req.body.activity;
    const atmosphere = req.body.atmosphere;
    const comment = req.body.comments;
    try {
        const result = await shareVibesSchema.insertOne(
            { love_or_want: loveWant, visitor_type: visitorType, activity: activity, atmosphere: atmosphere,
                comments: comment, date: new Date() }
        );

        res.status(200).json(
            { love_or_want: result.love_or_want,  visitor_type: result.visitor_type, activity: result.activity,
            atmosphere: result.atmosphere, comments: result.comments, date: result.date}
        );
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
})

router.get('/', async (req, res) => {
   try {
       const results = await shareVibesSchema.find({});
       res.render('vibe-shares.ejs', {
           title: "Vibe Shares",
           category: "vibe-shares",
           meta: {
               description: "See what locals, tourists, and new residents love to do in Sarasota. Explore shared " +
                   "experiences, favorite activities, dining spots, and hidden gems recommended by real people.",
               keywords: "Sarasota activities, Sarasota restaurants, Sarasota parks, Sarasota want, Sarasota Love," +
                   "Locals, Tourists, New residence, Family, Dates, Solo"
           },
           vibes: results
       });
   } catch (e) {
       console.error(e);
       res.sendStatus(500);
   }
})

module.exports = router;