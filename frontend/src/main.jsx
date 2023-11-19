import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import store from './store/configureStore';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
  // </React.StrictMode>
);
