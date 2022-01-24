import accountsList from '../mock/authMock.js'


const addUser = async ({ username, avatar }) => {
	const user = {
		username,
		avatar			
	}

	await accountsList.push(user)

	return user
}


export {
	addUser,
}
