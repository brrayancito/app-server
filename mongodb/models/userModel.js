import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  photoUrl: {
    type: String,
    required: true
  },
  allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
})

const User = mongoose.model('User', UserSchema)

export default User
