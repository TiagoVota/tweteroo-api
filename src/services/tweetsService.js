import * as tweetsRepository from '../repositories/tweetsRepository.js'


const getTweetsList = async () => {
	const lastTweets = await tweetsRepository.takeLastTweets({})

	const orderedTweets = reverseList(lastTweets)

	return orderedTweets
}

const reverseList = arr => [ ...arr ].reverse()


const postUserTweet = async ({ username, tweet }) => {
	const tweetInfo = await tweetsRepository.addTweet({ username, tweet })

	return tweetInfo
}


export {
	getTweetsList,
	postUserTweet,
}
