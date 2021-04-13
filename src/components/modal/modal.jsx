import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { getModalVisibility } from '../../store/selectors';
import { addReview, setModalVisible } from '../../store/actions';

const EVENT_KEY_CODE_ESCAPE = 27;

const initialFormState = {
  name: '',
  pros: '',
  cons: '',
  body: '',
  rating: 0,
  isRecommend: true,
  date:'1 минуту назад',
  isFormValid: true
}

function Modal({ isModalVisible, setModalVisible, addReview }) {

  const [formState, setFormState] = useState({ ...initialFormState })
  const rating = formState.rating - 1;

  const handleEscKeydown = (evt) => {
    if (evt.keyCode === EVENT_KEY_CODE_ESCAPE) {
      closeModalForm();
    }
  };

  const closeModalForm = () => {
    setModalVisible(false);
  }

  const handleFieldChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;

    setFormState({
      ...formState,
      [inputName]: inputValue,
    });
  }

  const handleRatingChange = (evt) => {
    setFormState({
      ...formState,
      'rating': Number(evt.target.value),
    });
  }

  const validateFields = () => 
    formState.name.length > 0 && formState.body.length > 0 ? true : false;   

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if(!validateFields()) {
      setFormState({
        ...formState,
        isFormValid: false,
      });

      return;
    }

    addReview(formState);

    setFormState({
      ...initialFormState,
    });

    closeModalForm();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscKeydown);

    return () => {
      window.removeEventListener('keydown', handleEscKeydown);
    };
  });

  if (!isModalVisible) {
    document.body.style.overflow = 'auto';
    return null;
  }
  document.body.style.overflow = 'hidden';

  return (
    <section className="modal">

    <div className="modal__inner">
      <h2 className="modal__title">Оставить отзыв</h2>

      <form
        className="modal__form"
        method="post"
        onSubmit={ handleFormSubmit }
      >
        <fieldset className="modal__fieldset">
          <div className="modal__required modal__required__test">
            <span className={ formState.isFormValid || formState.name.length > 0 ? 'visually-hidden' : 'modal__validation-error' } >Пожалуйста, заполните поле</span>
            <input
              className={ formState.isFormValid || formState.name.length > 0 ? 'modal__input' : 'modal__input modal__input--not-valid'}
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              aria-label="Имя пользователя"
              value={ formState.name }
              onChange={ handleFieldChange }
              autoFocus={ true }
            />
          </div>
          <input
            className="modal__input"
            type="text"
            name="pros"
            placeholder="Достоинства"
            aria-label="Достоинства"
            value={ formState.pros }
            onChange={ handleFieldChange }
          />
          <input
            className="modal__input"
            type="text"
            name="cons"
            placeholder="Недостатки"
            aria-label="Недостатки"
            value={ formState.cons }
            onChange={ handleFieldChange }
          />
          <div className="modal__value">
            <span className="modal__rate-product-text">Оцените товар:</span>
              
            <fieldset className="modal__stars" >

              {
                Array(5).fill(0).map((item, index) => 
                  <label className="" key={ index }>
                    <svg
                      className="modal__star"
                      
                      width="27"
                      height="27"
                      viewBox="0 0 27 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill={ rating < index ? '#D1D2D5' : '#D12136' }
                        d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
                      />
                    </svg>

                    <input
                      className="modal__rating-input"
                      type="radio"
                      name="rating"
                      value={ index + 1 }
                      onChange={ handleRatingChange }
                      checked={ rating === index ? true : false }
                    />
                  </label>
                )
              }

            </fieldset>

          </div>
          <div className="modal__required">
            <span className="visually-hidden">Пожалуйста, заполните поле</span>
            <textarea
              className={ formState.isFormValid || formState.body.length > 0 ? 'modal__input' : 'modal__input modal__input--not-valid'}
              name="body"
              placeholder="Комментарий"
              aria-label="Текст комментария"
              value={ formState.body }
              onChange={ handleFieldChange }
            ></textarea>
          </div>
        </fieldset>
        <button className="modal__submit" type="submit">Оставить отзыв</button>
        <button
          className="modal__close"
          aria-label="Close modal"
          onClick={ closeModalForm }
        ></button>
      </form>
    </div>
 
    </section>
  );
}

const mapStateToProps = (state) => ({
  isModalVisible: getModalVisibility(state),
});

const mapDispatchToProps = {
  addReview,
  setModalVisible
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
