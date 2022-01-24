import { Router } from 'express'

import * as authController from '../controllers/authController.js'


const router = new Router()

router.post('/sign-up', authController.signUp)


export default router
