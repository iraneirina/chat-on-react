import './App.css';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList/MessageList';
import {ChatList} from "./components/ChatList/ChatList";
import { Grid, Container, Box } from '@mui/material';

import { useState, useEffect } from 'react';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
      // setMessages([...messages, newMessage])
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
        <Box sx={{ height: '100%', width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ChatList />
                </Grid>
                <Grid
                       item xs={8}>
                    <MessageList messages={messages} />
                    <Form
                          addMessage={addMessage} />
                </Grid>
        </Grid>
        </Box>
    </div>
  );
};
