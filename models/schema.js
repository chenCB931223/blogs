var mongoose = require('mongoose');
var schema = mongoose.Schema;

var User = new schema({
    title: String,
    content: String,
    date: String
}, { versionKey: false })

module.exports = mongoose.model('blogs', User);