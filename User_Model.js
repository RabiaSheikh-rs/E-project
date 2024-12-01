const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['artist', 'customer'], required: true , default: 'customer' },// Simplifies role differentiation
  personalGallery: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' }],// A list of favorites
  notifications: [{ message: String, date: Date }],
  profile: {
    age: Number,
    interests: [String],
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);




