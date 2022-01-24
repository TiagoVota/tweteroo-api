import accountsList from '../mock/authMock.js'
import tweetsList from '../mock/tweetsMock.js'


const takeLastTweets = async ({ qnt=10 }) => {
	const lastTweets = await takeLastElements(tweetsList, qnt)
	const tweetsWithAvatar = await includeAvatar(lastTweets, accountsList)

	return tweetsWithAvatar
}

const takeLastElements = (arr, qnt) => arr.slice(Math.max(arr.length - qnt, 0))

const includeAvatar = (tweetsArr, accountsArr) => {
	return tweetsArr.map((tweet) => {
		const { avatar } = accountsArr.find(({ username }) => username === tweet.username)

		return {
			...tweet,
			avatar
		}
	})
}


const addTweet = async ({ username, tweet }) => {
	const tweetInfo = {
		username,
		tweet
	}

	await tweetsList.push(tweetInfo)

	return tweetInfo
}


export {
	takeLastTweets,
	addTweet,
}
