import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Runestone } from './components/runestone/Runestone';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;

