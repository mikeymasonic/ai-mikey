import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import './chatWindow.css';

let messageArray = [];
const axios = require('axios');

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const getCall = () => {
    axios.get('https://thing3.hosted-models.runwayml.cloud/v1/info')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const handleChange = async (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    // console.log(message);
  };

  const handleSendMessage = async () => {
    getCall();
    await messageArray.push(message);
    await setMessages(messageArray);
    await console.log('message: ', message);
    await console.log('messages: ', messages);
    await setMessage('');
    // console.log('messageArray: ', messageArray);
  };

  const messageNodes = messageArray.map((message) => {
    console.log(message + messageArray.length);
    return <p key={message + Date.now() + Math.random()}>{message}</p>;
  });

  useEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      console.log('enter hit');
      handleSendMessage();
    }
  });

  return (
    <section className="chatWindow">
      <section style={{ 
        width: 300, 
        verticalAlign: 'center', 
        marginTop: '25vh', 
        marginLeft: '50vh',
        position: 'unset',
      }} 
      className="window">
        <section className="title-bar">
          <section className="title-bar-text">
          mikeyBot
          </section>
        </section>
        <section className="window-body">
          <section>
            {messageNodes}
          </section>
        Message:
          <input
            type='text'
            value={message}
            onChange={handleChange}
          />
          <button onClick={handleSendMessage}>send</button>

          {/* <textarea className="textArea"
            style={{ 
              width: 150, 
              height: 50,
              marginLeft: 10,
              marginTop: 10,
            }}>
            chat log here
          </textarea> */}
          
        
          {/* <p>Hi Mikey 🙂✨</p> */}
        </section>
      </section>
    </section>
  );
};

export default ChatWindow;
