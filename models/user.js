const {mongoose, Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const c18Schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "thought"
    },
    friends: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"    
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval
c18Schema.virtual('friendCount').get(function() {
  return this.friends.reduce(
    (total, friends) => total + friends.length + 1,
    0
  );
});

const c18 = model('c18', c18Schema);

module.exports = c18;
