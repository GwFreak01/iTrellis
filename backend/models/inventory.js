const mongoose = require('mongoose');


const uniqueValidator = require('mongoose-unique-validator');

const inventorySchema = mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  productName:{
    type: String,
    required: true
  },
  inventoryQuantity:{
    type: Number,
    required: true
  },
  shipOnWeekends: {
    type: boolean,
    required: true
  },
  maxBusinessDaysToShip: {
    type: Number,
    required: true
  }
});

inventorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Inventory', inventorySchema);
