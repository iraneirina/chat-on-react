import { List, ListItem } from '@mui/material';

export const MessageList = ({ messages }) => {
  return (
    <List>
      {messages.map((message, idx) => (
        <ListItem className="message" key={idx}>
          {message.author}: {message.value}</ListItem>
      ))}
    </List>
  );
};
