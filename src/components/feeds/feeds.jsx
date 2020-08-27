import React from 'react'
import Tweetbox from '../tweetbox/tweetbox'
import './feeds.css'
import Post from '../posts/post'


function Feeds() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h4>Home</h4>
      </div>
      <Tweetbox/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feeds
