import * as tweetsRepository from '../repositories/tweetsRepository.js'
import * as tweetsValidation from '../validations/tweetsValidation.js'

import { validationErrors } from '../validations/handleValidation.js'

import InputsError from '../errors/InputsError.js'


const getTweetsList = async () => {
	const lastTweets = await tweetsRepository.takeLastTweets({})

	const orderedTweets = reverseList(lastTweets)

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
	postUserTweet,
}
