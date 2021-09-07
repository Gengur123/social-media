import React, { useState } from 'react'
import FeedBlock from './components/FeedBlock';
import FollowerBlock from './components/FollowerBlock';
import FollowingBlock from './components/FollowingBlock';
import NavbarBlock from './components/NavbarBlock';
import ProfileInfoBlock from './components/ProfileInfoBlock';

function App () {
  // useState returns an array of two items
  // [state, updateFunction]
  const [tweetCount, setTweetCount] = useState(0)

  function addOne () {
    setTweetCount(tweetCount + 1)  
  }

  return (
    <React.Fragment>
      <NavbarBlock tweetCountAddOne={addOne} />

      <div class="row">
        <div class="column">
          <ProfileInfoBlock tweetCount={tweetCount} />
        </div>

        <div class="column">
          <FeedBlock />
        </div>

        <div class="column">
          <FollowerBlock />
          <FollowingBlock />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
