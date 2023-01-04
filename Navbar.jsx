import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/" className="nav__link">
                        Home
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/about" className="nav__link">
                        About
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/" className='title__link'>
                        MATEK TÉTELEK
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/tetelek" className="nav__link">
                        Tételek
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/settings" className="nav__link">
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar