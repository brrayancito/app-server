import Express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import userRouter from './routes/user.routes.js'
import propertyRouter from './routes/property.routes.js'

dotenv.config()

const App = Express()
App.use(cors())
App.use(Express.json({ limit: '50mb' }))
App.disable('x-powered-by')

App.get('/', (req, res) => {
  res.send({ message: 'Hello from the server 😊' })
})

App.use('/api/v1/users', userRouter)
App.use('/api/v1/properties', propertyRouter)

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
