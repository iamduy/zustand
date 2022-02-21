import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const AppWrapper = props => {
  return (
    <BrowserRouter history={createMemoryHistory}>
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>
    </BrowserRouter>
  )
};

ReactDOM.render(<AppWrapper />, document.getElementById('app'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(process.env.NODE_ENV === 'development' ? console.log : null)
