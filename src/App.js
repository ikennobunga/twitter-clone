import React from 'react';
import Sidebar from './components/sidebar/sidebar'
import Feeds from './components/feeds/feeds'
import './App.css'


function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feeds/>
    </div>
  );
}

export default App;
