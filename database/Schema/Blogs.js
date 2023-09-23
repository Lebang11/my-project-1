const mongoose = require('mongoose');

BlogSchema = new mongoose.Schema({
    author: mongoose.SchemaTypes.String,
    title: mongoose.SchemaTypes.String,
    text: mongoose.SchemaTypes.String,
    date: mongoose.SchemaTypes.Date
});

module.exports = mongoose.model('blogs', BlogSchema);