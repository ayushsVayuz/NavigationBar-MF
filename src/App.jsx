import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import "./index.css";
import CheckInternetConnection from './components/CheckInternetConnection';

const isStandalone = !window.__POWERED_BY_HOST__; 

const App = () => {
  const content = (
    <CheckInternetConnection>
      <NavigationBar />
    </CheckInternetConnection>
  );

  return isStandalone ? <BrowserRouter>{content}</BrowserRouter> : content;
};

export default App;