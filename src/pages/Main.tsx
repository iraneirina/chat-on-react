import React, { FC } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Main: FC = () => (
  <div className="page-container">
    <div className="main-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 className="head-text">Main page</h1>
        <p className="secondary-text">
          Welcome to our project! <br /> Here you can chat with a bot, and soon
          possibly with real people.
          <br /> To get started, sign up or login.
        </p>
        <MailOutlineIcon
          sx={{
            fontSize: '200px',
            display: 'flex',
            margin: 'auto',
            width: '50%',
            color: '#4682B4',
          }}
        />
      </div>
    </div>
  </div>
);
