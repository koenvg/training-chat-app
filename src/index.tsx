import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './client/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/semantic-ui/dist/semantic.min.css';
import './main.css';
import { Provider } from 'react-redux';
import { createChatStore } from './client/reducers/store';

const store = createChatStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
