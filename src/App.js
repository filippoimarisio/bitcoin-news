import React from 'react';
import './App.css';
import NewsList from './components/NewsList'

function App() {
  return (
    <div className="main-content">
      <h1 className="main-content__title">
        Today's Bitcoin News
      </h1>
      <NewsList />
    </div>
  );
}

export default App;
