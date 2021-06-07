import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import './chatWindow.css';
import styles from './chatWindow.css';

const sendAudio = new Audio('/mp3/send.mp3');
const receiveAudio = new Audio('/mp3/receive.mp3');
const loginAudio = new Audio('/mp3/login.mp3');
const axios = require('axios');

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('immausername');

  useEffect(() => {
    loginAudio.play();
    // const usernamePrompt = prompt('Please enter a screen name', username);
    // setUsername(usernamePrompt);
  }, []);

  // function updateScroll(){
  //   const element = document.getElementsByClassName('messageArea');
  //   element.scrollTop = element.scrollHeight;
  // }

  const postCall = (passedInMessage) => {
    axios
      .post('https://thing3.hosted-models.runwayml.cloud/v1/query', {
        prompt: passedInMessage,
        // batch_size: 5,
        max_characters: 1024,
        // top_p: 1,
        // seed: 250
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
      // updateScroll();
    }, 2000);
  };

  const handleSendMessage = async () => {
    await setMessages((oldState) => [...oldState, username + ': ' + message]);
    await console.log('message: ', message);
    await console.log('messages: ', messages);
    await postCall(message);
    await setMessage('');
    sendAudio.play();
  };

  const messageNodes = messages.map((message, idx) => {
    if (message.startsWith('LpCpUnK:')){
      return <section className={styles.botMessage} key={message + idx}>{message}</section>;
    } else {
      return <section className={styles.userMessage} key={message + idx}>{message}</section>;
    }
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
          width: '52vw',
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
          <section className={styles.messageArea}>
            <section>{messageNodes}</section>
            <div id="anchor"></div>
          </section>
          <br />
          <input type="text" value={message} onChange={handleChange} autoFocus/>
          <button onClick={handleSendMessage}>send</button>
        </section>
      </section>
    </section>
  );
};

export default ChatWindow;
