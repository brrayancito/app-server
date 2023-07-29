import Express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'

dotenv.config()

const App = Express()
App.use(cors())
App.use(Express.json({ limit: '50mb' }))

App.get('/', (req, res) => {
  res.send({ message: 'Hello World!' })
})

async function startServer () {
  try {
    connectDB(process.env.MONGODB_URl)
  } catch (error) {
    console.log(error)
  }
}
