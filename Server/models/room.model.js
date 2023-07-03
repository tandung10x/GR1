const mongoosse = require('mongoose');

const roomSchema= mongoosse.Schema({
  name_room: {
    type: String, 
    unique: true,
    required: true
  },
  max_people: {
    type: Number,
    default: 0
  },
  cost_per_day: {
    type: Number
  },
  other_information: {
    type: String
  },
  location: {
    type: String
  },
  isFree: {
    type: Number,
    default: 1
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports= mongoosse.model("room", roomSchema);