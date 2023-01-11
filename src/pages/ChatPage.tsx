import { FC, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { MessageList } from 'src/components/MessageList';
import { Form } from 'src/components/Form';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import Button from '@mui/material/Button';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const [isChatsShow, setChatsShow] = useState(true);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  const handleChatsShow = () => {
    setChatsShow(!isChatsShow);
  };

  const classNameMessages = isChatsShow
    ? 'messages-with-chats'
    : 'messages-without-chats';

  const classNameForm = isChatsShow ? 'form-with-chats' : 'form-without-chats';

  return (
    <>
      <div className="page-container">
        <div className="chatPage-container">
          <div className="chat-toggle">
            {!isChatsShow ? (
              <Button onClick={handleChatsShow}>
                chats
                <ArrowCircleRightSharpIcon sx={{ paddingLeft: '10px' }} />
              </Button>
            ) : (
              <Button onClick={handleChatsShow}>
                close
                <ArrowCircleLeftSharpIcon sx={{ paddingLeft: '10px' }} />
              </Button>
            )}
          </div>
          {isChatsShow && (
            <div className="chatList-container">
              <ChatList />
            </div>
          )}
          <div className={classNameMessages}>
            <MessageList messages={chatId ? messages[chatId] : []} />
          </div>
          <div className={classNameForm}>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};
