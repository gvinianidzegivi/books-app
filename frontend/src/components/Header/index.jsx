import './style.scss';
import { Link, NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className='header'>
      <Link className='logo' to='/'>
        B📖📖KS
      </Link>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              <span className='nav-icon'>🏠</span> Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/books'>
              <span className='nav-icon'>📚</span> Books
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/my-shelf'>
              <span className='nav-icon'>🗃️</span> My Shelft
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/sign-in'>
              <span className='nav-icon'>➡️</span> Sign In
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
