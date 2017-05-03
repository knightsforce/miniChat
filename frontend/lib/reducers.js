import { combineReducers } from 'redux';
import flags from "./flags";

/*
	Многие флаги повторяют функционал, в контексте теста - бесмсленно,
	но если добавится определенный функционал к какому-то действию, то не придется переписывать
	в разных файлах, добавляя флаги, а просто здесь вставить еще один case: break.
*/

function chat(stateChat={}, action) {
	switch(action.type) {
		case flags.changeInputStatus:
			let users = Object.assign({}, stateChat.users);
			let userKey = action.payload.user;
			let value = action.payload.value;
			users[userKey] = Object.assign({}, users[userKey], {inputStatus: value});
			stateChat = Object.assign({}, stateChat, {users: users});
			break;

		case flags.pushMessage:
			let listMessage = stateChat.listMessage.map((item)=>{
				return Object.assign({}, item);
			});
			listMessage.push(action.payload.message);
			stateChat = Object.assign({}, stateChat, {listMessage: listMessage});
			break;
	}
	return stateChat;
}

let rootReducer = combineReducers({
	chat,
});

export default rootReducer;