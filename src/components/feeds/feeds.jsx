import React, {useState, useEffect} from 'react'
import Tweetbox from '../tweetbox/tweetbox'
import Post from '../posts/post'
import db from '../../firebase.js'
import FlipMove from 'react-flip-move'
import './feeds.css'


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
      <FlipMove>
        {
          posts.map(post => (
            <Post
              key={post.text}
              displayName={post.displayName} 
              username={post.username} 
              verified={post.verified} 
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))
        }
      </FlipMove>
    </div>
  )
}

export default Feeds
