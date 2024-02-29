const mongoose = require('mongoose');

const { CollectionName, ModelName } = require('../constants');

const CharacterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    originPrice: {
      type: Number,
      required: true
    },
    discountRate: {
      type: Number,
      default: null
    },
    // descriptions: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: ModelName.file
    // }],
  },
  {
    timestamps: true,
    collection: CollectionName.characters,
  }
);

module.exports = mongoose.model(ModelName.character, CharacterSchema);