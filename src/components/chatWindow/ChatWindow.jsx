import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import './chatWindow.css';
const axios = require('axios');


// const textGrabber = (e) => {
//   console.log('state will be put in here', e);
// };

let messageArray = [];

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      console.log('enter hit');
      handleSendMessage();
    }
  });

  const handleChange = async (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    // console.log(message);
  };

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

  const handleSendMessage = async () => {
    getCall();
    await messageArray.push(message);
    await setMessages(messageArray);
    await console.log('message: ', message);
    await console.log('messages: ', messages);
    // console.log('messageArray: ', messageArray);
  };

  useEffect(() => {
    const doSomething = () => {
      if (window.keyCode === 13) {
        // Cancel the default action, if needed
        window.preventDefault();
        // Trigger the button element with a click
        handleSendMessage();
      }
    };

    window.addEventListener('keyup', doSomething);
    return () => {
      window.removeEventListener('keyup', doSomething);
    };
  }, []);
  
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
