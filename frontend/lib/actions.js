import flags, {statuses} from "./flags";

function changeInputStatus(user, value) {
	return {
		type: flags.changeInputStatus,
		payload: {
			user: user,
			value: value
		}
	}
}

export {changeInputStatus};

function pushMessage(message) {
	return {
		type: flags.pushMessage,
		payload: {
			message: message
		}
	}
}

export {pushMessage};