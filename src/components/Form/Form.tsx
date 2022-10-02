import { FC, useState} from 'react';
import TextField from '@mui/material/TextField';
import {useParams} from "react-router-dom";
import { AUTHOR, Message } from "src/types";
import { Button } from 'src/components/Form/components/Button/Button';


interface FormProps {
    addMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [value, setValue] = useState('');
  const {chatId} = useParams();

  const handleSubmit = (ev:  React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if(chatId) {
        addMessage(chatId, {
            author: AUTHOR.USER,
            value
        });
        setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit} >
        <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            size="small"
            autoFocus
            inputProps={{'data-testid': 'input'}}
        />
        <Button disabled={!value} render={(label: string) => <div>{label}</div>}>
            send
        </Button>
    </form>
  );
};
