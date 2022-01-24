const accountsList = []


const signUp = (req, res) => {
	const { username, avatar } = req.body

	addUser({ username, avatar })

	console.log({accountsList})

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
