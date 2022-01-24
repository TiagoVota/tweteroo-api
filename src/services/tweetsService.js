import tweetsList from '../mock/tweetsMock.js'
import accountsList from '../mock/authMock.js'


const getTweets = (req, res) => {
	const lastTweets = takeLastElements(tweetsList, 10)
	const orderedTweets = reverseList(lastTweets)
	const tweetsWithAvatarOrdered = includeAvatar(orderedTweets, accountsList)

	return res.status(200).send(tweetsWithAvatarOrdered)
}

// Olá Edu, essas duas funções aqui, valeria mais a pena eu deixar por aqui mesmo,
// em uma pasta utils pasta helper ou aonde? Sei que esse caso é pequeno e não
// há problema em deixar aqui, mas penso na organização de projetos maiores ;D
const takeLastElements = (arr, qnt) => arr.slice(Math.max(arr.length - qnt, 0))
const reverseList = arr => [ ...arr ].reverse()

const includeAvatar = (tweetsArr, accountsArr) => {
	return tweetsArr.map((tweet) => {
		const { avatar } = accountsArr.find(({ username }) => username === tweet.username)

		return {
			...tweet,
			avatar
		}
	})

}


const sendTweet = (req, res) => {
	const { body: { username, tweet } } = req

	addTweet({ username, tweet })

	return res.status(200).send('Tweet inserido!')
}

const addTweet = ({ username, tweet }) => {
	tweetsList.push({
		username,
		tweet			
	})
}


export {
	getTweets,
	sendTweet,
}
