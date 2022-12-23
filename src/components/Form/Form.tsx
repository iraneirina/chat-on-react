import { FC, memo, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

import { AUTHOR } from 'src/types';
import { Button } from 'src/components/Form/components/Button/Button';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from 'src/store/messages/slice';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from 'src/store';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      dispatch(
        addMessageWithReply({
          chatName: chatId,
          message: { author: AUTHOR.USER, value },
        })
      );
      setValue('');
    }
  };

  return (
    <div className="form-container">
      {!chatId ? null : (
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <div>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              label="Message..."
              variant="filled"
              autoFocus
              //multiline
              inputProps={{ 'data-testid': 'input' }}
              sx={{ width: '58vw' }}
            />
          </div>
          <div>
            <IconButton color="primary" disabled={!value} type="submit">
              <SendIcon />
            </IconButton>
          </div>
        </Box>
      )}
    </div>
  );
});
