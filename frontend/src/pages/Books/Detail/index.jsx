import './style.scss';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';

const BookDetailPage = () => {
  const book = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === 'loading') return <h1>Loading...</h1>;

  return (
    <div className='book-detail'>
      <h1>{book?.title}</h1>
      <h2>{book.author}</h2>
      <img src={book.img_url} alt={book.title} />
      <p className='description'>{book.anotation}</p>
    </div>
  );
};

export default BookDetailPage;
