var mongoose = require('mongoose');
var schema = mongoose.Schema;

var User = new schema({
    title: String,
    content: String,
    date: String,
    comment: {
        type: Array,
        default: []
    },
    like: {
        type: Number,
        default: 0
    }
}, { versionKey: false })

module.exports = mongoose.model('blogs', User);