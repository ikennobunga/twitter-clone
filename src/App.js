import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Feeds from './components/feeds/feeds'
import Widget from './components/widgets/widget'
import './App.css'


function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feeds/>
      <Widget/>
    </div>
  )
}

export default App;
