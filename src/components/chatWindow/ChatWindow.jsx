import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import './chatWindow.css';

let sendAudio = new Audio('/mp3/send.mp3');
let receiveAudio = new Audio('/mp3/receive.mp3');
let loginAudio = new Audio('/mp3/login.mp3');
const axios = require('axios');

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loginAudio.play();
  }, []);

  const postCall = (passedInMessage) => {
    axios
      .post('https://thing3.hosted-models.runwayml.cloud/v1/query', {
        prompt: passedInMessage,
      })
      .then(function (response) {
        console.log('postResponse: ', response.data.generated_text);
        handleReceiveMessage(response.data.generated_text);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = async (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleReceiveMessage = async (passedInMessage) => {
    setTimeout(async function () {
      await console.log('generatedMessage: ', passedInMessage);
      await setMessages((oldState) => [
        ...oldState,
        'LpCpUnK: ' + passedInMessage,
      ]);
      receiveAudio.play();
    }, 2000);
  };

  const handleSendMessage = async () => {
    await setMessages((oldState) => [...oldState, 'immausername: ' + message]);
    await console.log('message: ', message);
    await console.log('messages: ', messages);
    await postCall(message);
    await setMessage('');
    sendAudio.play();
    // console.log('messageArray: ', messageArray);
  };

  const messageNodes = messages.map((message, idx) => {
    return <p key={message + idx}>{message}</p>;
  });

  useEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      console.log('enter hit');
      handleSendMessage();
    }
  });

  return (
    <section className="chatWindow">
      <section
        style={{
          width: 300,
          verticalAlign: 'center',
          marginTop: '25vh',
          marginLeft: '50vh',
          position: 'unset',
        }}
        className="window"
      >
        <section className="title-bar">
          <section className="title-bar-text">mikeyBot</section>
        </section>
        <section className="window-body">
          <section>{messageNodes}</section>
          Message:
          <input type="text" value={message} onChange={handleChange} />
          <button onClick={handleSendMessage}>send</button>
        </section>
      </section>
    </section>
  );
};

export default ChatWindow;
