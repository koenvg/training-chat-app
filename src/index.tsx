import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './client/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/semantic-ui/dist/semantic.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
