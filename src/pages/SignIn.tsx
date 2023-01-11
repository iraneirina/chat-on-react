import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logIn } from 'src/services/firebase';

import { Box, CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      await logIn(login, password);
      navigate('/chats');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('error');
      }
    } finally {
      setLoading(false);
    }
  };

  const isEmptyField = !login || !password;

  return (
    <>
      <div className="page-container">
        <div className="main-container">
          <h2 className="head-text">Sign In</h2>
          <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <TextField
                sx={{ marginBottom: '20px' }}
                label="Login"
                variant="outlined"
                type="email"
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <Button
                disabled={isEmptyField}
                type="submit"
                sx={{ marginTop: '30px', marginBottom: '50px' }}
                variant="outlined"
              >
                Login
              </Button>
            </div>
          </Box>
          {loading && (
            <CircularProgress
              sx={{
                display: 'flex',
                margin: 'auto',
                width: '50%',
              }}
            />
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
};
