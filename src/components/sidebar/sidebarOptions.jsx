import React from 'react'
import './sidebarOption.css'


function SidebarOptions({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon className="icons"/>
      <h4>{text}</h4>
    </div>
  )
}

export default SidebarOptions
