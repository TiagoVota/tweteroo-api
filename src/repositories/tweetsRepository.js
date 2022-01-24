import accountsList from '../mock/authMock.js'
import tweetsList from '../mock/tweetsMock.js'


const getLastTweets = async ({ qnt=10 }) => {
	const lastTweets = await takeLastElements(tweetsList, qnt)
	const tweetsWithAvatar = await includeAvatar(lastTweets, accountsList)

	return tweetsWithAvatar
}

const takeLastElements = (arr, qnt) => arr.slice(Math.max(arr.length - qnt, 0))

const includeAvatar = (tweetsArr, accountsList) => {
	return tweetsArr.map((tweet) => {
		const avatar = findUserAvatarByUsername({
			username: tweet.username,
			accountsList
		})

		return {
			...tweet,
			avatar
		}
	})
}

const findUserAvatarByUsername = ({ username, accountsList }) => {
	const { avatar } = accountsList.find(account => account.username === username)

	return avatar
}


const getUserTweets = async ({ username }) => {
	const avatar = await findUserAvatarByUsername({ username, accountsList })

	const userTweets = tweetsList
		.filter(tweetInfo => tweetInfo.username === username)
		.map(tweetInfo => { return { ...tweetInfo, avatar } })
	
	return userTweets
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
	getLastTweets,
	getUserTweets,
	addTweet,
}
