const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    artwork: { type: mongoose.Schema.Types.ObjectId, ref: 'Artwork', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['credit card', 'debit card', 'net banking'], required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    date: { type: Date, default: Date.now },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Payment', paymentSchema);
  
  
