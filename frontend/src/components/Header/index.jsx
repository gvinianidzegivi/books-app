import './style.scss';
import { Link, NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className='header'>
      <Link className='logo' to='/'>
        Ka
        <span style={{ fontSize: '60px' }}>B</span>ook
      </Link>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              <span style={{ fontSize: '2em' }}>H</span>ome
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/books'>
              <span style={{ fontSize: '2em' }}>B</span>ooks
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/my-shelf'>
              <span style={{ fontSize: '2em' }}>M</span>y Shelf
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/sign-in'>
              <span style={{ fontSize: '2em' }}>S</span>ign In
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
