import { Route, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/Root';
import HomePage from '../pages/Home';
import BooksPage from '../pages/Books';
import SignInPage from '../pages/SignIn';
import { apiGetBooks } from '../api/books';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'books',
        element: <BooksPage />,
        loader: apiGetBooks,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
    ],
  },
]);

export default router;
