import "antd/dist/antd.css";
import { createMemoryHistory } from 'history';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from 'config/routes'
const App = props => {
  return (
    <BrowserRouter history={createMemoryHistory}>
      <Routes {...props} />
    </BrowserRouter>
  );

}

export default App;
