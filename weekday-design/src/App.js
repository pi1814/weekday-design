import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobBoard from './components/JobBoard';
import JobFilters from './components/JobFilter';

function App() {
  return (
    <Provider store={store}>
    <div>
      <JobFilters />
      <JobBoard />
    </div>
  </Provider>
  );
}

export default App;
