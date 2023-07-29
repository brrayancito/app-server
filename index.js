import Express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'

dotenv.config()

const App = Express()
App.use(cors())
App.use(Express.json({ limit: '50mb' }))
App.disable('x-powered-by')

App.get('/', (req, res) => {
  res.send({ message: 'Hello World!' })
})

async function startServer () {
  const PORT = process.env.PORT || 8080
  try {
    connectDB(process.env.MONGODB_URl)

    App.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}

startServer()
