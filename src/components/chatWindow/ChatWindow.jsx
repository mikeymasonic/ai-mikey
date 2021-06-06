import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import './chatWindow.css';

let messageArray = [];
let sendAudio = new Audio('/mp3/send.mp3');
let receiveAudio = new Audio('/mp3/receive.mp3');
let loginAudio = new Audio('/mp3/login.mp3');
const axios = require('axios');

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [generatedMessage, setGeneratedMessage] = useState('');

  // const getCall = () => {
  //   axios.get('https://thing3.hosted-models.runwayml.cloud/v1/info')
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // };

  useEffect(() => {
    loginAudio.play();
  }, []);

  const postCall = (passedInMessage) => {
    axios.post('https://thing3.hosted-models.runwayml.cloud/v1/query', {
      prompt: passedInMessage,
    })
      .then(async function (response) {
        // await response;
        // await console.log(response);
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
    // console.log(message);
  };

  const handleReceiveMessage = async (passedInMessage) => {
    // await setGeneratedMessage(passedInMessage);
    // await messageArray.push('LpCpUnK: ' + generatedMessage);
    // await console.log('generatedMessage: ', generatedMessage);
    // await setMessages(messageArray);
    setTimeout(async function(){ 
      await setGeneratedMessage(passedInMessage);
      await messageArray.push('LpCpUnK: ' + generatedMessage);
      await console.log('generatedMessage: ', generatedMessage);
      await setMessages(messageArray);
      receiveAudio.play();
    }, 3000);
  };

  const handleSendMessage = async () => {
    // getCall();
    sendAudio.play();
    await messageArray.push('immausername: ' + message);
    await setMessages(messageArray);
    await console.log('message: ', message);
    await console.log('messages: ', messages);
    await postCall(message);
    await setMessage('');
    // console.log('messageArray: ', messageArray);
  };

  const messageNodes = messageArray.map((message) => {
    // console.log(message + messageArray.length);
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
