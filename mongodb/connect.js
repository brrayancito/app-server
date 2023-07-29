import mongoose from 'mongoose'

async function connectDB (url) {
  mongoose.set('strictQuery', true)

  mongoose.connect(url)
    .then(() => console.log('Database Connected'))
    .catch((error) => console.log(error))
}

export default connectDB
