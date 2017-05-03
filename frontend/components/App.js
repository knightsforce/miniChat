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
		listMessage: [
			{
				text: "M1",
				date: new Date(),
				user: "user1"
			},
			{
				text: "M2",
				date: new Date(),
				user: "user2"
			},
			{
				text: "M1",
				date: new Date(),
				user: "user1"
			},
			{
				text: "M1",
				date: new Date(),
				user: "user2"
			},
			{
				text: "M2",
				date: new Date(),
				user: "user2"
			},
			{
				text: "M1",
				date: new Date(),
				user: "user1"
			},
			{
				text: "M1",
				date: new Date(),
				user: "user1"
			},
			{
				text: "M1",
				date: new Date(),
				user: "user1"
			},
			{
				text: "M1",
				date: new Date(),
				user: "user1"
			},
			{
				text: "Пример большого сообщения: Download the React DevTools and use an HTTP server (instead of a file: URL) for a better development experience: https://fb.me/react-devtoolsDownload the React DevTools and use an HTTP server (instead of a file: URL) for a better development experience: https://fb.me/react-devtoolsDownload the React DevTools and use an HTTP server (instead of a file: URL) for a better development experience: https://fb.me/react-devtoolsDownload the React DevTools and use an HTTP server (instead of a file: URL) for a better development experience: https://fb.me/react-devtools",
				date: new Date(),
				user: "user1"
			}
		],
		users: {//Объединил, чтобы обрабатывать разное количество пользователей, а не фиксированное
			user1: {
				avatar: "./public/images/user1.avatar.jpg",
				name: "Василий",
				surname: "Васильев",
				inputStatus: false,
				id: "id1",
			},
			user2: {
				avatar: "./public/images/user2.avatar.jpg",
				name: "Иван",
				surname: "Иванов",
				inputStatus: false,
				id: "id2",
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
		let {props, storeChat, changeInputStatus, pushMessage} = this.props;
		return (
			<div id="chatContainer">
				<WindowChat
					key="W1"
					storeChat={storeChat}
					user="user1"
					changeInputStatus={changeInputStatus}
					pushMessage = {pushMessage}
				/>
				<WindowChat
					key="W2"
					storeChat={storeChat}
					user="user2"
					changeInputStatus={changeInputStatus}
					pushMessage = {pushMessage}
				/>
			</div>
		);
  }
}


function mapStateToProps(state) {
	return {storeChat: state.chat};
}

function mapDispatchToProps(dispatch) {
	return {
		changeInputStatus: (user, val)=>{
			dispatch(actions.changeInputStatus(user, val));
		},
		pushMessage: (message)=>{
			dispatch(actions.pushMessage(message));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
export {store};