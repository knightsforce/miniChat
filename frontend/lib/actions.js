import flags, {statuses} from "./flags";
//import {citiesURL, weatherURL} from "./dist"
/*function citiesLoadAction(flag) {
	return {
		type: flag,
		payload: {
			status: statuses.load,
			cities: null,
		}
	}
}*/

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