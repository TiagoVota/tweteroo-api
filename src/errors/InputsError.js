class InputsError extends Error {
	constructor(message) {
		super(message)
		this.name = 'InputsError'
		this.message = message
		this.status = 400
	}
}


export default InputsError
