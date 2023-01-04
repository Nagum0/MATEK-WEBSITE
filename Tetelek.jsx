import React from 'react';
import { Link } from 'react-router-dom';

const Tetelek = () => {
  return (
    <>
      <nav>
        <ul className="tetelek__navbar">
          <h1 className='title__link tetelek__title'>
            TÉTELEK
          </h1>

          <Link to="/">
            <button className='primary__btn tetelek__back__btn'>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </Link>

          <li className="tetel___list__item">
            <Link to="/halmazok" className='tetel__link'>
              1.Halmazok és velük való műveletek
            </Link>
          </li>
          <li className="tetel___list__item">
            <Link to="/iteletek" className='tetel__link'>
              2.Ítéletek és velük való műveletek
            </Link>
          </li>
          <li className="tetel___list__item">
            <Link to="/szamelmelet" className='tetel__link'>
              3.Számhalmazok, számelmélet 
            </Link>
          </li>
          <li className="tetel___list__item">
            <Link to="/algebrai_kefejezesek" className='tetel__link'>
              4.Algebrai kifejezések és a velük való műveletek
            </Link>
          </li>         
        </ul>
      </nav>
    </>
  )
}

export default Tetelek;