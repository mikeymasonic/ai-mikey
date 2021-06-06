import React from 'react';
import './chatWindow.css';

function ChatWindow() {
  return (
    <div className="chatWindow">
      <div style={{ 
        width: 300, 
        verticalAlign: 'center', 
        marginTop: '25vh', 
        marginLeft: '50vh',
        position: 'unset',
      }} 
      className="window">
        <div className="title-bar">
          <div className="title-bar-text">
          mikeyBot
          </div>
        </div>
        <div className="window-body">
          <textarea className="textArea"
            style={{ 
              width: 150, 
              height: 50,
              marginLeft: 10,
              marginTop: 10,
            }}>
            textarea here
          </textarea>
          <textarea
            style={{ 
              width: 150, 
              height: 50,
              marginLeft: 10,
              marginTop: 10,
            }}>
            textarea here
          </textarea>
          <p>Hi Mikey 🙂✨</p>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
