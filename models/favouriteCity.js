const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteCitySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  name: { type: String, required: true },
  temp: { type: Number, required: true },
    
}, {
  timestamps: true, 
});



module.exports = mongoose.model('FavouriteCity', favouriteCitySchema);