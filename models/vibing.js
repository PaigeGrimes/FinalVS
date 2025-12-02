const mongoose = require('mongoose');

const vibesSchema = new mongoose.Schema({
    id: {type: String, unique: true, required: true},
    vibe_count: {type: Number, required: true},
});

module.exports = mongoose.model("Vibe", vibesSchema);