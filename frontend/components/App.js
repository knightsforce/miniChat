import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import rootReducer from '../lib/reducers';
import * as actions from '../lib/actions';
import flags from "../lib/flags";

import thunk from 'redux-thunk';

import WindowChat from './WindowChat';

var initState = {
	chat: {
		users: {//Объединил, чтобы обрабатывать разное количество пользователей, а не фиксированное
			user1: {
				listMessage: [],
				inputStatus: false,
			},
			user2: {
				listMessage: [],
				inputStatus: false,
			}
		}
	}
}

const store = createStore(rootReducer, initState, applyMiddleware(thunk));

class App extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	render() {
		let {props, store} = this.props;
		return (
			<div id="chatContainer">
				<WindowChat store={store} />
				<WindowChat store={store} />
			</div>
		);
  }
}


function mapStateToProps(state) {
	return {storeChat: state.chat};
}

function mapDispatchToProps(dispatch) {
	return {

		/*queryCities: (direct)=>{
			dispatch(actions.queryCities(direct));
		},*/
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
export {store};