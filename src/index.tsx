import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './client/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/semantic-ui/dist/semantic.min.css';
import './main.css';
import { Provider } from 'react-redux';
import { createChatStore } from './client/reducers/store';
import { initializeApp } from 'firebase';

const firebase = initializeApp({
  databaseURL: 'https://training-chat-app.firebaseio.com/',
});
const store = createChatStore(firebase);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
