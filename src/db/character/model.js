const mongoose = require('mongoose');

const { CollectionName, ModelName } = require('../constants');

const CharacterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    itemLevel: {
      type: String,
      required: true,
    },
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: ModelName.user,
    // },
  },
  {
    timestamps: true,
    collection: CollectionName.characters,
  }
);

module.exports = mongoose.model(ModelName.character, CharacterSchema);