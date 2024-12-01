const auctionSchema = new mongoose.Schema({
    artwork: { type: mongoose.Schema.Types.ObjectId, ref: 'Artwork', required: true },
    bids: [
      {
        customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },// bidder
        amount: { type: Number, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    highestBid: { type: Number, default: 0 },// Automatically updated with bid logic
    endDate: { type: Date, required: true },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Auction', auctionSchema);
  
