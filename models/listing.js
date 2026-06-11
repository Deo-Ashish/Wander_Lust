const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  image: {
    url: String,
    filename: String,
  },

  price: {
    type: Number,
  },

  location: {
    type: String,
  },

  country: {
    type: String,
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  latitude: Number, // Ensure this is defined as Number
  longitude: Number, // Ensure this is defined as Number

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  // category: {
  //   type: String,
  //   enum: ["mountains", "arctic", "farms"]
  // }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
