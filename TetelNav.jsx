import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TetelNav = () => {
  const [selects, setSelects] = useState();

  return (
    <>
      <nav>
        <ul className="tetel__on__page__nav">
          <li className="tetel__on__p__item">
            <Link to='/tetelek'>
              <button className='secondary__btn'>
                <i class="fa-solid fa-arrow-left"></i>
              </button>
            </Link>
          </li>
          <li className="tetel__on__p__item">
            <select value={selects} onChange={e=>setSelects(e.target.value)} className='tetel__drop__down__select'>
              <option value="/halmazok" className='tetel__drop__down__option'>
                Halmazok és velük való műveletek
              </option>
              <option value="/iteletek" className='tetel__drop__down__option'>
                Ítéletek és velük való műveletek
              </option>
              <option value="/szamelmelet" className='tetel__drop__down__option'>
                Számhalmazok, számelmélet
              </option>
              <option value="/algebrai_kefejezesek" className='tetel__drop__down__option'>
                Algebrai kifejezések és a velük való műveletek
              </option>
            </select>

            <Link to={selects}>
              <button className='tetel__drop__down__btn'>
                Go
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default TetelNav;