import { Router } from 'express'

import * as tweetsController from '../controllers/tweetsController.js'


const router = new Router()

router.get('', tweetsController.getTweets)

router.post('', tweetsController.sendTweet)


export default router
