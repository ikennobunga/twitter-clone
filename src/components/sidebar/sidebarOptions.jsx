import React from 'react'
import './sidebarOption.css'

function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon/>
      <p>{text}</p>
    </div>
  )
}

export default SidebarOptions
