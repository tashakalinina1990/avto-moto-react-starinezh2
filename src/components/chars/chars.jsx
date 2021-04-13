import { Fragment } from "react";

function Chars({ chars }) {
  return (
    <section className="chars">
      <h3 className="visually-hidden">Полные технические характеристики</h3>

      <dl className="chars__list">
        {
          chars.map((char, index) => {
            return(
              <Fragment key={ `char_${ index }` }>
                <dt className="chars__define">{ char.define }</dt>
                <dd className="chars__describe">{ char.describe }</dd>
              </Fragment>      
            )
          })
        }
      </dl>

    </section>
  );
}

export default Chars;
