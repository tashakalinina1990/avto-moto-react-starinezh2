function Details({ details }) {
  return (
    <section className="details">
      <h2 className="visually-hidden">Технические характеристики</h2>

      <p className="details__title">{ details.title }</p>

      <ul className="details__list">
        <li className="details__element details__element--fuel-type"><p className="details__description">{ details.fuelType }</p></li>
        <li className="details__element details__element--gear-type"><p className="details__description">{ details.gearType }</p></li>
        <li className="details__element details__element--horse-power"><p className="details__description">{ details.horsePower }</p></li>
        <li className="details__element details__element--engine-value"><p className="details__description">{ details.engineValue }</p></li>
      </ul>

      <div className="details__prices">
        <p className="details__price details__price--current">{ details.currentPrice }</p>
        <p className="details__price details__price--old">{ details.oldPrice }</p>
      </div>

      <button className="details__submit" type="button">Оставить заявку</button>
      <button className="details__credit" type="button">В кредит от { details.creditFrom }</button>

    </section>
  );
}

export default Details;
