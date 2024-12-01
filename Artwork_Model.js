const artworkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    image: { type: String, required: true },// URL to artwork image
    price: { type: Number, required: true },
    isAuction: { type: Boolean, default: false },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },// Link to the artist
    status: { type: String, enum: ['available', 'sold'], default: 'available' },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Artwork', artworkSchema);
  


   
