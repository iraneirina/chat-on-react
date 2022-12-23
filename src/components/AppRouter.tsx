import { FC, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ChatPage } from 'src/pages/ChatPage';
import { Main } from 'src/pages/Main';
import { Profile } from 'src/pages/Profile';
import { ChatList } from './ChatList';
import { Header } from './Header';
import { Articles } from 'src/pages/Articles';
import { SignIn } from 'src/pages/SignIn';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { SignUp } from 'src/pages/SignUp';
import { firebaseAuth } from 'src/services/firebase';
import { auth } from 'src/store/profile/slice';

export const AppRouter: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      dispatch(auth(!!user));
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route
          path="profile"
          element={<PrivateRoute component={<Profile />} />}
        />
        <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
        <Route path="signup" element={<PublicRoute component={<SignUp />} />} />
        <Route path="chats" element={<PrivateRoute />}>
          <Route index element={<ChatPage />} />
          <Route path=":chatId" element={<ChatPage />} />
        </Route>
        <Route path="articles" element={<Articles />} />
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  );
};
