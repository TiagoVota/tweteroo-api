import * as authRepository from '../repositories/authRepository.js'
import * as authValidation from '../validations/authValidation.js'

import { validationErrors } from '../validations/handleValidation.js'

import InputsError from '../errors/InputsError.js'


const signUpUser = async (userInfo) => {
	const inputsErrors = validationErrors({
		objectToValid: userInfo,
		objectValidation: authValidation.validateSignUp
	})

	if (inputsErrors) throw new InputsError(inputsErrors)

	const user = await authRepository.addUser(userInfo)

	return user
}



export {
	signUpUser,
}
