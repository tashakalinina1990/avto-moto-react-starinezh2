function Contacts() {
  return (
    <section className="contacts">
      <h3 className="visually-hidden">Контактная информация</h3>

      <dl className="contacts__list">
        <dt className="contacts__define">Адрес</dt>
        <dd className="contacts__describe">Санкт-Петербург, набережная реки Карповки, дом 5</dd>
        <dt className="contacts__define">Режим работы</dt>
        <dd className="contacts__describe">Ежедневно, с 10:00 до 21:00</dd>
        <dt className="contacts__define">Телефон</dt>
        <dd className="contacts__describe"><a className="contacts__link" href="tel:88003335599">8 (800) 333-55-99</a></dd>
        <dt className="contacts__define">E-mail</dt>
        <dd className="contacts__describe"><a className="contacts__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a></dd>
      </dl>
      
      <div className="contacts__container">
        <iframe className="contacts__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.831469259072!2d30.31456080813721!3d59.96811900354503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5NzAyMg!5e0!3m2!1sru!2sca!4v1617725767371!5m2!1sru!2sca" title="карта проезда" width="431" height="271" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </section>
  );
}

export default Contacts;
