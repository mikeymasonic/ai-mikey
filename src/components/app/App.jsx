import React from 'react';
// import { fbMessageData } from '../../utils/data';
import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../home/Home';

const App = () => {
//Hii, are these following commented functions for the chat window? 

  // let whatever = [];
  // let whatever2 = [];
  // let fbMessageThing2;

  // const thing = fbData.messages.map((message) => {
  //   if (message.sender_name === 'Michael Romay' && !message.content?.includes('http') && !message.content?.includes('www') && !message.content?.includes('.com')) {
  //     whatever.push(message.content);
  //     return <section key={Math.random() + message.content?.length || 32}><p>{message.content}</p>
  //     </section>;
      
  //   }
  // });

  // const ljThing = ljData.livejournal.map((message) => {

  //   whatever2.push(message.event.event);
  //   return <section key={Math.random() + message.event.event?.length || 32}><p>{message.event.event}</p>
  //   </section>;
  // });
  // console.log(whatever.join('\r\n'));

  // const fbCommentThing = fbCommentData.comments.map((message) => {
  //   if (message.data) {
  //     console.log(message.data[0].comment.comment);
  //     whatever2.push(message.data[0].comment.comment);
  //     return <section key={Math.random() + message.data[0].comment.comment?./// length || 32}><p>{message.data[0].comment.comment}</p>
  //     </section>;
  //   }

  // const fbMessageThing = fbMessageData.fbMessages.map((message) => {
  //   if (message.messages) {
  //     // console.log(message.messages);
  //     fbMessageThing2 = message.messages.map((actualMessage) => {
  //       // console.log(actualMessage);
  //       if (actualMessage.sender_name === 'Michael Romay') {
  //         // console.log(actualMessage.content);
  //         whatever2.push(actualMessage.content);
  //       }
  //     });
  //   }


  // });
  // console.log(fbMessageThing);
  // console.log(whatever2);
  // const displayThing = whatever2.map((message) => {
  //   return <section key={Math.random() + message?.length || 32}><p>{message}</p>
  //   </section>;
  // });

  // console.log(whatever.join('\r\n'));
  return (
    <div>
      <Router>               
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <Home {...routerProps} />} 
          />
        </Switch>
      </Router>
    </div>
  );
}; 

export default App; 
