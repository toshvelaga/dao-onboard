const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memeberSchema = new Schema(
  {
    discordName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    onboardDate: {
      type: String,
      required: false,
    },
    onboardTime: {
      type: String,
      required: false,
    },
    dateJoined: {
      type: String,
      required: false,
    },
    lastUpdated: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Memeber = mongoose.model('Member', memeberSchema)

module.exports = Memeber
