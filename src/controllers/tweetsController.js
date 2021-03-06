import * as tweetsService from '../services/tweetsService.js'


const getTweets = async (req, res, next) => {
	const { query: { page } } = req

	try {
		const tweetsList = await tweetsService.getTweetsList({ page })

		return res.status(200).send(tweetsList)

	} catch (error) {
		const { name: errorName, message, status } = error

		if (errorName === 'InputsError') return res.status(status).send(message)
		
		next(error)
	}
}


const getUserTweets = async (req, res, next) => {
	const { params: { username } } = req

	try {
		const userTweets = await tweetsService.getUserTweetsList({ username })

		return res.status(200).send(userTweets)

	} catch (error) {
		const { name: errorName, message, status } = error

		if (errorName === 'InputsError') return res.status(status).send(message)
		
		next(error)
	}
}


const sendTweet = async (req, res, next) => {
	const {
		body: tweetInfo,
		headers: { user: username }
	} = req

	try {
		const tweet = await tweetsService.postUserTweet({ ...tweetInfo, username})
	
		return res.status(201).send(tweet)
		
	} catch (error) {
		const { name: errorName, message, status } = error

		if (errorName === 'InputsError') return res.status(status).send(message)
		
		next(error)
	}
}


export {
	getTweets,
	getUserTweets,
	sendTweet,
}
