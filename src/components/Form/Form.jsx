import { useState } from 'react';
import { AUTHOR } from "src/constants";

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addMessage({
        author: AUTHOR.user,
        value
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Текст сообщения"
      />
      <button disabled={!value}>Отправить</button>
    </form>
  );
};
