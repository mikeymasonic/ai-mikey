import React from 'react';
import './chatWindow.css';

const ChatWindow = () => {
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
          <textarea className="textArea"
            style={{ 
              width: 150, 
              height: 50,
              marginLeft: 10,
              marginTop: 10,
            }}>
            chat log here
          </textarea>
          <textarea
            style={{ 
              width: 150, 
              height: 50,
              marginLeft: 10,
              marginTop: 10,
            }}>
            type here
          </textarea>
          <button>send</button>
          {/* <p>Hi Mikey 🙂✨</p> */}
        </section>
      </section>
    </section>
  );
};

export default ChatWindow;
