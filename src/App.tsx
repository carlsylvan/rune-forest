import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Runestone } from './components/runestone/Runestone';
import { Outlet } from 'react-router-dom';

export const AuthorContext = createContext({author: "Carl", password: "123"})

function App() {
  return (
    <div className="App">
      <AuthorContext.Provider value={{author: "Carl", password: "123"}}>
      <Outlet />
      </AuthorContext.Provider>
    </div>
  );
}

export default App;

