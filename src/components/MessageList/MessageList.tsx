import { List, ListItem, Typography } from '@mui/material';
import { FC } from 'react';
import { Message } from 'src/types';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="messages-block">
      <List>
        {messages.map((message, idx) => (
          <ListItem className="message-list" key={idx} data-testid="li">
            {message.author}: {message.value}
          </ListItem>
        ))}
      </List>
      {!messages.length && (
        <Typography
          align="center"
          sx={{ width: '100%', mt: 2, float: 'left', fontSize: '20px' }}
        >
          Choose chat and start messaging!
        </Typography>
      )}
    </div>
  );
};
