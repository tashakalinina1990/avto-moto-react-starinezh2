import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

function App({ slides, chars, details }) {
  return (
    <>
      <Header />
      <Main
        slides={ slides }
        chars={ chars }
        details={ details }
      />
      <Footer />
    </>
  );
}

export default App;
