import * as authService from '../services/authService.js'


const signUp = async (req, res, next) => {
	const { body: { username, avatar } } = req

	try {
		const user = await authService.signUpUser({ username, avatar })
		
		return res.status(201).send(user)

	} catch (error) {
		next(error)
	}

}


export {
	signUp,
}
