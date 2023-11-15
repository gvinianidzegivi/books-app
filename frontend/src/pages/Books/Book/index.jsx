import { Link } from 'react-router-dom';

const BookComponent = ({ _id, title, author, img_url, anotation }) => {
  return (
    <div className='book'>
      <Link to={`/books/${_id}`}>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <img src={img_url} alt={title} />
        {/* <p className='description'>{anotation}</p> */}
      </Link>
    </div>
  );
};

export default BookComponent;
