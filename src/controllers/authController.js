import * as authService from '../services/authService.js'


const signUp = async (req, res, next) => {
	const { body: userInfo } = req

	try {
		const user = await authService.signUpUser(userInfo)
		
		return res.status(201).send(user)

	} catch (error) {
		const { name: errorName, message, status } = error

		if (errorName === 'InputsError') return res.status(status).send(message)
		
		next(error)
	}

}


export {
	signUp,
}
