import Slider from '../slider/slider';
import Details from '../details/details';
import Content from '../content/content';
import Modal from '../modal/modal';

function Main({ slides, chars, details }) {
  return (
    <main className="main">
      <div className="main__inner">
        <h1 className="visually-hidden">{ details.title }</h1>

        <Slider slides={ slides } />
        <Details details={ details } />
        <Content chars={ chars } />
        <Modal />

      </div>
    </main>
  );
}

export default Main;
