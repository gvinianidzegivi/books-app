import { Route, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/Root';
import HomePage from '../pages/Home';
import BooksPage from '../pages/Books';
import SignInPage from '../pages/SignIn';
import { apiGetBook, apiGetBooks } from '../api/books';
import BookDetailPage from '../pages/Books/Detail';

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
        path: 'books/:id',
        element: <BookDetailPage />,
        loader: apiGetBook,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
    ],
  },
]);

export default router;
