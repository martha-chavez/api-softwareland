
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Por favor ingrese el nombre de la tarea.'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});
module.exports = mongoose.model('Task',TaskSchema);
// Task = mongoose.model('Tasks');
