const mongoose = require('mongoose');

const { CollectionName, ModelName, EnumUserType } = require('../constants');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      select: false
    },
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      default: null
    },
    phone: {
      type: String,
      default: null
    },
    type: {
      type: String,
      enum: [EnumUserType.default, EnumUserType.admin],
      default: EnumUserType.default
    }
  },
  {
    timestamps: true,
    collection: CollectionName.users,
  }
);

module.exports = mongoose.model(ModelName.user, UserSchema);