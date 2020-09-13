import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvier';

ReactDOM.render(
  <React.StrictMode>
    {/* StateProvider */}
    {/* when we sign in with google we push the user into the data layer*/}
    {/* and we can pull user from data layer */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    {/* datalayer push, pull data 가능 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
