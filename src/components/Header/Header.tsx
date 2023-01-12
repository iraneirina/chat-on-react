import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { StoreState } from 'src/store';
import { auth } from 'src/store/profile/slice';
import { logOut } from 'src/services/firebase';

import {
  Container,
  AppBar,
  Typography,
  List,
  ListItemButton,
  Button,
} from '@mui/material';
import HiveIcon from '@mui/icons-material/Hive';

const nav = [
  {
    name: 'Main',
    path: '/',
  },
  {
    name: 'Chats',
    path: '/chats',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Articles',
    path: '/articles',
  },
];

export const Header: FC = () => {
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(auth(false));
    }
  };

  return (
    <>
      <header>
        <AppBar position="static">
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: '70px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <HiveIcon sx={{ display: 'flex', paddingRight: '20px', position: 'relative' }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                className="header-text"
              >
                MESSENGER
              </Typography>
            </div>
            {isAuth ? (
              <Button
                sx={{
                  fontSize: '14px',
                  color: '#FFFFFF',
                  border: 'solid #FFFFFF',
                  fontWeight: '700',
                  paddingRight: '10px',
                }}
                variant="text"
                onClick={handleLogout}
              >
                logout
              </Button>
            ) : (
              <div>
                <Button
                  sx={{
                    fontSize: '14px',
                    color: '#FFFFFF',
                    border: 'solid #FFFFFF',
                    marginRight: '15px',
                    fontWeight: '700',
                    paddingRight: '10px',
                  }}
                  variant="text"
                  onClick={() => navigate('/signin')}
                >
                  login
                </Button>
                <Button
                  variant="text"
                  sx={{
                    fontSize: '14px',
                    color: '#FFFFFF',
                    border: 'solid #FFFFFF',
                    fontWeight: '700',
                    paddingRight: '10px',
                  }}
                  onClick={() => navigate('/signup')}
                >
                  sign up
                </Button>
              </div>
            )}
          </Container>
        </AppBar>
        <div className="menu">
          <List sx={{ display: 'flex' }}>
            {nav.map((item, idx) => (
              <ListItemButton key={idx}>
                <Link to={item.path} className="menuLink">
                  {item.name}
                </Link>
              </ListItemButton>
            ))}
          </List>
        </div>
      </header>
      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
