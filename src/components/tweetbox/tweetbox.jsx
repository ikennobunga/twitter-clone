import React, { useState } from 'react'
import './tweetbox.css'
import { Avatar, Button } from '@material-ui/core'
import db from '../../firebase'


function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState(``)
  const [tweetImage, setTweetImage] = useState(``)

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection(`posts`).add({
      displayName: `Mr Zappa`,
      username: `zappos`,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: `https://picsum.photos/200/300`
    })

    setTweetImage(``)
    setTweetMessage(``)
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar className="tweetbox__avatar" src={require(`../../assets/chef-coffee-cook-887827.jpg`)}/>
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text" 
            placeholder={`Whats happening ?`}
          />
        </div>

        <input 
          className="tweetbox__input__image"
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text" 
          placeholder={`Optional: Enter image URL`}
        />
        <Button onClick={sendTweet} type="submit" className="tweetbox__btn">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox