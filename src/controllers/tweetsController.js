import * as tweetsService from '../services/tweetsService.js'


const getTweets = async (req, res, next) => {
	try {
		const tweetsList = await tweetsService.getTweetsList()

		return res.status(200).send(tweetsList)

	} catch (error) {
		next(error)
	}
}


const sendTweet = async (req, res, next) => {
	const { body: tweetInfo } = req

	try {
		const tweet = await tweetsService.postUserTweet(tweetInfo)
	
		return res.status(201).send(tweet)
		
	} catch (error) {
		const { name: errorName, message, status } = error

		if (errorName === 'InputsError') return res.status(status).send(message)
		
		next(error)
	}
}


export {
	getTweets,
	sendTweet,
}
