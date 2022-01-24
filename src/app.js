import cors from 'cors'
import express from 'express'

import authRouter from './routers/authRouter.js'
import tweetsRouter from './routers/tweetsRouter.js'
import statusRouter from './routers/statusRouter.js'

import serverMiddlewareError from './middlewares/serverMiddlewareError.js'


const app = express()

app.use(cors())
app.use(express.json())

app.use('', authRouter)
app.use('/tweets', tweetsRouter)
app.use('/status', statusRouter)

app.use(serverMiddlewareError)


export default app
