import { combineReducers } from 'redux';
import flags from "./flags";

/*
	Многие флаги повторяют функционал, в контексте теста - бесмсленно,
	но если добавится определенный функционал к какому-то действию, то не придется переписывать
	в разных файлах, добавляя флаги, а просто здесь вставить еще один case: break.
*/

function chat(state={}, action) {
	switch(action.type) {
		case flags.citiesLoad:
			break;
		default:
			return state;
	}
}

let rootReducer = combineReducers({
	chat,
});

export default rootReducer;