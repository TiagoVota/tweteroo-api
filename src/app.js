import cors from 'cors'
import express from 'express'

import authRouter from './routers/authRouter.js'
import statusRouter from './routers/statusRouter.js'
import tweetsRouter from './routers/tweetsRouter.js'


const app = express()

app.use(cors())
app.use(express.json())

app.use('', authRouter)
app.use('/status', statusRouter)
app.use('/tweets', tweetsRouter)


export default app
