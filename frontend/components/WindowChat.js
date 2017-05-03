import React, { Component } from 'react';
import flags from "../lib/flags";

/*
  Классы с большой буквы у компонентов, с маленькой у простых элементов
*/

export default class WindowChat extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    
    this.state = {
    
    }
  }

  render() {
    let props = this.props;

    return (
      <div className="WindowChat">
        <MessagesFeed />
        <MessageInput />
      </div>
    );
  }
}

class MessagesFeed extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    
    this.state = {
    
    }
  }

  render() {
    let props = this.props;

    return (
      <div className="MessagesFeed">

      </div>
    );
  }
}

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    
    this.state = {
    
    }
  }

  render() {
    let props = this.props;

    return (
      <div className="MessageInput">
        <FieldInput />
        <SendButton />
      </div>
    );
  }
}

function FieldInput(props) {
  return (
    <div className="FieldInput">
      <div className="inputElement" contentEditable="true" placeholder = "Введите сообщение"/>
    </div>
  );
}

function SendButton(props) {
  return (
    <button className="SendButton">Кнопка</button>
  );
}