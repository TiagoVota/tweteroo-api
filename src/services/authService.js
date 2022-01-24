import * as authRepository from '../repositories/authRepository.js'


const signUpUser = async ({ username, avatar }) => {
	const user = await authRepository.addUser({ username, avatar })

	return user
}



export {
	signUpUser,
}
