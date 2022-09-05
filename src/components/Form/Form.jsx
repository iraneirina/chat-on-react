import { useState} from 'react';
import TextField from '@mui/material/TextField';

import { AUTHOR } from "src/constants";
import { Button } from 'src/components/Form/components/Button/Button';

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
    <form onSubmit={handleSubmit} >
        <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            size="small"
            autoFocus
        />
        <Button label="send" disabled={!value}/>
    </form>
  );
};
