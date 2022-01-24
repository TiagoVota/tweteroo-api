const tweetsList = []


const getTweets = (req, res) => {
	const lastTweets = 	takeLastElements(tweetsList, 10)

	return res.status(200).send(lastTweets)
}

const takeLastElements = (arr, qnt) => arr.slice(Math.max(arr.length - qnt, 0))


const sendTweet = (req, res) => {

}


export {
	getTweets,
	sendTweet,
}
