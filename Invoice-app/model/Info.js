'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InfoSchema = new Schema({
  Name: {
    type: String,
    default: '',
  },
  Email: {
    type: String,
    default: '',
  },
  DueDate: {
    type: Date,
    default: '',
  },
  lineItemList: [],
});

module.exports = mongoose.model('Info', InfoSchema);
