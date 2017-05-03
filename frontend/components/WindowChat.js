import React, { Component } from 'react';
import flags from "../lib/flags";
import {formatDate, parseString} from "../lib/dist"

/*
  Классы с большой буквы у компонентов, с маленькой у простых элементов
*/

export default class WindowChat extends Component {
  constructor(props) {
    super(props);
    this.props=props;
  }

  render() {
    let props = this.props;

    return (
      <div className="WindowChat">
        <MessagesFeed
          storeChat={props.storeChat}
          user={props.user}
        />
        <MessageInput 
          changeInputStatus={props.changeInputStatus}
          pushMessage={props.pushMessage}
          user={props.user}
        />
      </div>
    );
  }
}

class MessagesFeed extends Component {
  constructor(props) {
    super(props);
    this.props=props;
  }

  render() {
    let props = this.props;
    let storeChat = props.storeChat;
    let users = storeChat.users;
    let listMessage = storeChat.listMessage;

    let inputsUsers = [];
    let messages = [];
    let currentUser = null;
    listMessage=listMessage.map((item, i)=>{

      currentUser = users[item.user];
      let {avatar, name, surname} = currentUser;
      let {date, text} = item;

      return (
        <li key={i} className="message">
          <img className="avatar" src={avatar} />
          <div className="content">
            <p className="name">{`${name} ${surname}`}</p>
            <p className="text">{text}</p>
          </div>
          <span className="date">{formatDate(date)}</span>
        </li>
      );

    });

    let userId = users[props.user].id;
    for(let key in users) {
      if(users[key].id == userId) continue;
      users[key].inputStatus && inputsUsers.push(users[key].name);
   }

    let statusInput = (inputsUsers && inputsUsers.length) ? <StatusInput inputsUsers={inputsUsers}/> : null;
    
    return (
      <div className="MessagesFeed">
        <ul className="messages" ref={(ul)=>{(ul && ul.scrollHeight) && (ul.scrollTop = ul.scrollHeight)}}>
          {listMessage}
        </ul>
        {statusInput}
      </div>
    );
  }
}

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    this.getInputField=this.getInputField.bind(this);
    this.rememberMessage=this.rememberMessage.bind(this);
    this.sendMessage=this.sendMessage.bind(this);
    this.message=null;
    this.inputField=null;
  }

  getInputField(elem) {
    this.inputField=elem;
  }

  rememberMessage(message) {
    this.message=message;
  }

  sendMessage() {
    if(!this.message) return;
    this.props.pushMessage({
            user: this.props.user,
            text: parseString(this.message),
            date: new Date(),
    });
    this.rememberMessage(null);
    this.inputField && (this.inputField.innerHTML="");
  }

  render() {
    let props = this.props;

    return (
      <div className="MessageInput">
        <FieldInput
          changeInputStatus={props.changeInputStatus}
          rememberMessage={this.rememberMessage}
          sendMessage={this.sendMessage}
          getInputField={this.getInputField}
          user={props.user}/>
        <SendButton
          send={this.sendMessage}
        />
      </div>
    );
  }
}

function FieldInput(props) {

  let str = "";
  let ctrl = false;
  let user = props.user;

  let inputHandler = (e)=>{

    props.changeInputStatus(user, true); 
    setTimeout(()=>{
      props.changeInputStatus(user, false);
    }, 1000);
  }

  let keyUp = (e)=>{
    ctrl && (ctrl = false);
    props.rememberMessage(e.target.innerText);
  }

  let keyDownHandler = (e)=>{

     (e.keyCode == 17) && (ctrl = true);
     if(e.keyCode == 13) {

        if(ctrl) {
          ctrl = false;
          props.sendMessage();
        }
     }  
  }

  return (
    <div className="FieldInput">
      <div
        className="inputElement"
        contentEditable="true"
        onInput = {inputHandler}
        onKeyDown = {keyDownHandler}
        onKeyUp = {keyUp}
        ref = {(div)=>{props.getInputField(div)}}
      />
    </div>
  );
}

function SendButton(props) {
  return (
    <button className="SendButton" onClick={props.send}>Отправить</button>
  );
}

function StatusInput(props) {
  let inputsUsers = props.inputsUsers;
  let length = inputsUsers.length;
  let postfix = ",";

  let userIn=inputsUsers.map((item, i)=>{
    return(<span key={"item"+i}>{item+ ((i+1<length) ? postfix : "")}</span>);
  });
  return (
    <div className="StatusInput">{userIn} ...</div>
  );
}