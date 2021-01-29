import React from 'react';
import { Navigation } from './components/Navigation'
import Router from './Router'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    // <Provider store={store}>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App