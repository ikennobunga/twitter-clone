import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './widget.css'


function Widget() {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchOutlinedIcon className="widget__searchIcon"/>
      </div>
    </div>
  )
}

export default Widget
