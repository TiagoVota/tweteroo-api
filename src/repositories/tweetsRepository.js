import accountsList from '../mock/authMock.js'
import tweetsList from '../mock/tweetsMock.js'


const getLastTweets = async ({ page, qnt }) => {
	const pageTweets = await getPageList(tweetsList, qnt, page)

	const tweetsWithAvatar = await includeAvatar(pageTweets, accountsList)

	return tweetsWithAvatar
}

const getPageList = (arr, qnt, page) => {
	const len = arr.length
	const previousStart = len - (qnt * page)

	let [ start, end ] = [previousStart, previousStart + qnt]

	if (previousStart < 0) {
		[ start, end ] = [0, len % qnt]

		if (previousStart + qnt < 0) end = 0
	}

	return arr.slice(start, end)
}

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
	const avatar = accountsList
		.find(account => account.username === username)?.avatar

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
