import * as tweetsRepository from '../repositories/tweetsRepository.js'
import * as tweetsValidation from '../validations/tweetsValidation.js'

import { validationErrors } from '../validations/handleValidation.js'

import InputsError from '../errors/InputsError.js'


const getTweetsList = async ({ page }) => {
	page = Number(page || 1)

	const inputsErrors = validationErrors({
		objectToValid: { page },
		objectValidation: tweetsValidation.validatePageQuantity
	})

	if (inputsErrors) throw new InputsError(inputsErrors)

	const lastTweets = await tweetsRepository.getLastTweets({ page, qnt: 10 })
	
	const orderedTweets = reverseList(lastTweets)
	
	return orderedTweets
}


const getUserTweetsList = async ({ username }) => {
	const inputsErrors = validationErrors({
		objectToValid: { username },
		objectValidation: tweetsValidation.validateUsername
	})

	if (inputsErrors) throw new InputsError(inputsErrors)
	
	const userTweets = await tweetsRepository.getUserTweets({ username })

	const orderedTweets = reverseList(userTweets)

	return orderedTweets
}

const reverseList = arr => [ ...arr ].reverse()


const postUserTweet = async (tweetInfo) => {
	const inputsErrors = validationErrors({
		objectToValid: tweetInfo,
		objectValidation: tweetsValidation.validatePostTweet
	})

	if (inputsErrors) throw new InputsError(inputsErrors)

	const tweet = await tweetsRepository.addTweet(tweetInfo)

	return tweet
}


export {
	getTweetsList,
	getUserTweetsList,
	postUserTweet,
}
