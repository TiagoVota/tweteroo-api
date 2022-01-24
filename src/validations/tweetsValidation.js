import joi from 'joi'


const validatePostTweet = joi.object({
	username: joi.string().required(),
	tweet: joi.string().required()
}).length(2)


export {
	validatePostTweet,
}
