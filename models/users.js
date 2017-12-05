var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  name: String,
  someID: String,
  polls: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Poll'
  }]
});


module.exports = mongoose.model('users', User);