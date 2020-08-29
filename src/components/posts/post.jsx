import React from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined'
import './post.css'



function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headertext">
            <h3>{displayName} &nbsp;
              <span className="post__headerspecial">
                {verified && <VerifiedUserIcon className="post__badge"/>} 
                @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerdescription">
            <p>{text}</p>
          </div>
        </div>
        <img className="post__image" src={image}/>
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishOutlinedIcon fontSize="small"/>
        </div>
      </div>
    </div>
  )
}

export default Post