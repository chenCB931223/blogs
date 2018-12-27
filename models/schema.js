var mongoose = require('mongoose');
var schema = mongoose.Schema;

var User = new schema({
    title: String,
    text: String,
    date: String
})

module.exports = mongoose.model('blog', User);