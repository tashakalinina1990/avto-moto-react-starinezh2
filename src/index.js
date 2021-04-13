import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './store/reducers';
import slides from './mock/slides.js';
import chars from './mock/chars.js';
import details from './mock/details.js';

import App from './components/app/app';
import './sass/style.scss';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App 
      slides={ slides }
      chars={ chars }
      details={ details }
    />
  </Provider>,
  document.getElementById('root')
);
