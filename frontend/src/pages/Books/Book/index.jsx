import './style.scss';
import { Link } from 'react-router-dom';

const BookComponent = ({ _id, title, author, img_url, anotation }) => {
  return (
    <Link className='book' to={`/books/${_id}`}>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <img src={img_url} alt={title} />
    </Link>
  );
};

export default BookComponent;
