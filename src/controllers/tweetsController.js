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
	const { body: { username, tweet } } = req

	try {
		const tweetInfo = await tweetsService.postUserTweet({ username, tweet })
	
		return res.status(201).send(tweetInfo)
		
	} catch (error) {
		next(error)
	}
}


export {
	getTweets,
	sendTweet,
}
