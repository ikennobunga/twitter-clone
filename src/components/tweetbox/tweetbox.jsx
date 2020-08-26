import React from 'react'
import './tweetbox.css'
import { Avatar, Button } from '@material-ui/core'


function Tweetbox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar className="tweetbox__avatar" src={require(`../../assets/chef-coffee-cook-887827.jpg`)}/>
          <input type="text" placeholder={`Whats happening ?`}/>
        </div>
        <input className="tweetbox__input__image" type="text" placeholder={`Enter image URL`}/>
        <Button className="tweetbox__btn">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox