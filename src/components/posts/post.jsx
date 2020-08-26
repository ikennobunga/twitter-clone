import React from 'react'
import './post.css'
import { Avatar } from '@material-ui/core'


function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={require(`../../assets/chef-coffee-cook-887827.jpg`)}/>
      </div>
    </div>
  )
}

export default Post
