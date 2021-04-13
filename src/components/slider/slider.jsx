import {useState} from 'react';

const MAX_SLIDE_NUMBER = 2;
const MIN_SLIDE_NUMBER = 0;

function Slider({ slides }) {
  const [currentSlideNumber, updateCurrentSlideNumber] = useState(0);

  return (
    <section className="slider">
      <h2 className="visually-hidden">Фотогалерея</h2>

      <div className="slider__photos new-model">
        <img
          className="slider__photo"
          src={ slides[currentSlideNumber].src }
          alt={ slides[currentSlideNumber].alt }
          width="600"
          height="375"
        />
      </div>

      <div className="slider__wrapper">
        <button
          className="slider__button slider__button--prev"
          aria-label="Показать предыдущее фото"
          onClick={() => updateCurrentSlideNumber(currentSlideNumber - 1)}
          disabled={ 
            currentSlideNumber === MIN_SLIDE_NUMBER
            ? true
            : false
          }
        >
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="slider__path" d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128" />
          </svg>
        </button>
        
        {
          slides.map((slide, index) => 
            <img
              className="slider__preview"
              src={ slide.src }
              alt={ slide.alt }
              key={ `slide_${ index }` }
              width="128"
              height="80"
            />)
        }
        
        <button
          className="slider__button slider__button--next"
          aria-label="Показать следующее фото"
          onClick={ () => updateCurrentSlideNumber(currentSlideNumber + 1) }
          disabled={ 
            currentSlideNumber === MAX_SLIDE_NUMBER
            ? true
            : false
          }
        >
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="slider__path" d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" />
          </svg>
        </button>
      </div>

    </section>
  );
}

export default Slider;
