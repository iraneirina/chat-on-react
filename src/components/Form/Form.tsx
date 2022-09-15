import { FC, useState} from 'react';
import TextField from '@mui/material/TextField';

import { AUTHOR, Message } from "src/types";
import { Button } from 'src/components/Form/components/Button/Button';

interface FormProps {
    addMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (ev:  React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    addMessage({
        author: AUTHOR.USER,
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
            inputProps={{'data-testid': 'input'}}
        />
        <Button label="send" disabled={!value}/>
    </form>
  );
};
