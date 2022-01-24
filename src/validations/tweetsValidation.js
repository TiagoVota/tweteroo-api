import joi from 'joi'


const validatePageQuantity = joi.object({
	page: joi.number().integer().min(1)
})

const validateUsername = joi.object({
	username: joi.string().required()
}).length(1)

const validatePostTweet = joi.object({
	username: joi.string().required(),
	tweet: joi.string().required()
}).length(2)


export {
	validatePageQuantity,
	validateUsername,
	validatePostTweet,
}
