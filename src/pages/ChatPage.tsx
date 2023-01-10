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

  const visible = false;

  return (
    <>
      <div className="page-container">
        <div className="chatPage-container">
          <div className="chatList-container">
            <ChatList />
          </div>
          <div className="messages-list">
            <MessageList messages={chatId ? messages[chatId] : []} />
          </div>
          <div className="messages-form">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};
