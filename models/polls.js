var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  options: {},
  voters: []
});


module.exports = mongoose.model('Poll', Poll);