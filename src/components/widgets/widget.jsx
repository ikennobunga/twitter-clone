import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import './widget.css'


function Widget() {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchOutlinedIcon className="widget__searchIcon"/>
        <input type="text" placeholder={`Search Twitter`}/>
      </div>
      <div className="widget__container">
        <h2>whats happening ?</h2>
        <TwitterTweetEmbed tweetId={`@shawnkenn`}/>
        <TwitterTimelineEmbed 
          sourceType={`profile`}
          screenName={`shawnkenn`}
          options={{ height: 500 }}
        />
        <TwitterShareButton options={{ text: `#react is awesome`, via: `Maple syrup` }}/>
      </div>
    </div>
  )
}

export default Widget