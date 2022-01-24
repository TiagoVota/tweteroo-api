import joi from 'joi'


const validateSignUp = joi.object({
	username: joi.string().required(),
	avatar: joi.string().required()
}).length(2)


export {
	validateSignUp,
}
