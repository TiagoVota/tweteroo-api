import { Router } from 'express'

import * as authService from '../services/authService.js'


const router = new Router()

router.post('/sign-up', authService.signUp)


export default router
