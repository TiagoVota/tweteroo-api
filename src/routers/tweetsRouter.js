import { Router } from 'express'

import * as tweetsController from '../controllers/tweetsController.js'


const router = new Router()

router.get('', tweetsController.getTweets)
router.get('/:username', tweetsController.getUserTweets)

router.post('', tweetsController.sendTweet)


export default router
