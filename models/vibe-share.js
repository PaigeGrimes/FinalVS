const mongoose = require('mongoose');

const shareVibesSchema = new mongoose.Schema({
    love_or_want: {type: String, enum: ["💕 I Love it", "🔍 I Want it"], required: true},
    visitor_type: {type: String, enum: ["Local", "Tourist", "New Resident"], required: true},
    activity: {type: String, enum: ["Date", "Solo", "Family", "Friends"], required: true},
    atmosphere: {type: String, enum: ["Upscale", "Casual", "Trendy", "Hidden"], required: true},
    comments: {type: String},
    date: {type: Date, required: true},
});

module.exports = mongoose.model("ShareVibes", shareVibesSchema);