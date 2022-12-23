import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from 'src/store/profile/slice';
import { selectName, selectVisible } from 'src/store/profile/selectors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const Profile: FC = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const visible = useSelector(selectVisible);
  const [value, setValue] = useState('');

  const isEmptyField = !value;

  return (
    <>
      <div className="page-container">
        <div className="main-container">
          <h2 className="head-text">Profile</h2>
          <p className="secondary-text">Your name: {name}</p>
          <p className="secondary-text">Change name:</p>
          <Box
            component="form"
            autoComplete="off"
            onSubmit={() => dispatch(toggleProfile())}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <TextField
                label="New name"
                variant="outlined"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
              <Button
                disabled={isEmptyField}
                type="submit"
                sx={{ marginTop: '30px', marginBottom: '50px' }}
                variant="outlined"
              >
                change name
              </Button>
            </div>
          </Box>
          <p className="secondary-text">visible: </p>
          <input type="checkbox" checked={visible} readOnly />
          <button onClick={() => dispatch(toggleProfile())}>
            change visible
          </button>
        </div>
      </div>
    </>
  );
};
