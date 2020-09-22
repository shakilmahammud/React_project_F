import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Feed from './Component/Feed/Feed';
import Widge from './Component/Widge/Widge';

function App() {
  return (
    <div className="app">
      <Header/>

      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widge/>
      </div>

    </div>
  );
}

export default App;
