import {useState} from 'react';

import Chars from '../chars/chars';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

function Content({ chars }) {
  const [currentTabNumber, updateCurrentTabNumber] = useState(1);

  return (
    <section className="content">
      <h2 className="visually-hidden">Дополнительная информация</h2>

      <ul className="content__list"
        onChange={ evt => updateCurrentTabNumber(Number(evt.target.value)) }
      >
        <li className="content__element">
          <input
            className="content__check visually-hidden" type="radio" name="category" id="chars" value="1" defaultChecked={ currentTabNumber === 1 ? true : false } />
          <label className="content__label" htmlFor="chars">Характеристики</label>
        </li>
        <li className="content__element">
          <input className="content__check visually-hidden" type="radio" name="category" id="reviews" value="2" defaultChecked={ currentTabNumber === 2 ? true : false }/>
          <label className="content__label" htmlFor="reviews">Отзывы</label>
        </li>
        <li className="content__element">
          <input className="content__check visually-hidden" type="radio" name="category" id="contacts" value="3" defaultChecked={ currentTabNumber === 3 ? true : false }/>
          <label className="content__label" htmlFor="contacts">Контакты</label>
        </li>
      </ul>

      {
        currentTabNumber === 1
        ? <Chars chars={ chars } />
        : currentTabNumber === 2
          ? <Reviews />
          : <Contacts />
      }
      
    </section>
  );
}

export default Content;
