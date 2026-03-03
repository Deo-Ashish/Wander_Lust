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
        type: String,

        default: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg",

        set: (v) => v === "" ? "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg" : v,
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
            ref: "Review"
        },
    ],
});



const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
