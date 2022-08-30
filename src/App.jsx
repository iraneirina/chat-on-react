import './App.css';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList/MessageList';
import { useState, useEffect } from 'react';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    //setMessages([...messages, newMessage])
      setMessages((prevMessages) => [...prevMessages, newMessage]);
  }

  useEffect(() => {
    if (messages.length > 0 &&
        messages[messages.length - 1].author === AUTHOR.user) {
        const timeout = setTimeout( () => {
            addMessage({
                author: AUTHOR.bot,
                value: 'I am Bot'
            });
        }, 1000);
        return () => clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </div>
  );
};
