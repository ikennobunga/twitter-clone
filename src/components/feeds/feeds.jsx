import React, {useState, useEffect} from 'react'
import Tweetbox from '../tweetbox/tweetbox'
import './feeds.css'
import Post from '../posts/post'
import db from '../../firebase.js'


function Feeds() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection(`posts`).onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h4>Home</h4>
      </div>
      <Tweetbox/>
      {
        posts.map(post => (
          <Post
            displayName={post.displayName} 
            username={post.username} 
            verified={post.verified} 
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))
      }
    </div>
  )
}

export default Feeds
