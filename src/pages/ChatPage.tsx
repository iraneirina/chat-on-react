import { FC } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { MessageList } from 'src/components/MessageList';
import { Form } from 'src/components/Form';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';
import Grid from '@mui/material/Grid';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <div className="page-container">
        <div className="chatPage-container">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ChatList />
            </Grid>
            <Grid item xs={8} sx={{ borderLeft: ' solid #d3d3d3' }}>
              <MessageList messages={chatId ? messages[chatId] : []} />
              <Form />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
