import './App.css';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'components/AppRouter';

export const App: FC = () => {
  return (
    // <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
    // </PersistGate>
  );
};
