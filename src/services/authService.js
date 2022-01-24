const accountsList = []


const signUp = (req, res) => {
	const { body: { username, avatar } } = req

	addUser({ username, avatar })

	return res.status(201).send('Usuário criado com sucesso!')
}

const addUser = ({ username, avatar }) => {
	accountsList.push({
		username,
		avatar			
	})
}


export {
	signUp,
}
