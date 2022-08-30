export const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, idx) => (
        <li className="message" key={idx}>
          {message.author}: {message.value}</li>
      ))}
    </ul>
  );
};
