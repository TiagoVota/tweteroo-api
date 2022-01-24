import { Router } from 'express'

import * as tweetsService from '../services/tweetsService.js'


const router = new Router()

router.get('', tweetsService.getTweets)

router.post('', tweetsService.sendTweet)


export default router
