const mongoose = require("mongoose");

const ProducSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a product name"],
    },

    quantity: {
      type: Number,
      required: [true, "please enter a quantity"],
      default: 0,
    },

    price: {
      type: Number,
      required: [true, "please enter a price"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProducSchema);

module.exports = Product;
