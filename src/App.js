import React from 'react'
import FeedBlock from './components/FeedBlock';
import FollowerBlock from './components/FollowerBlock';
import FollowingBlock from './components/FollowingBlock';
import NavbarBlock from './components/NavbarBlock';
import ProfileInfoBlock from './components/ProfileInfoBlock';

function App () {

  return (
    <React.Fragment>
      <NavbarBlock />
      <FeedBlock />
      <FollowerBlock />
      <FollowingBlock />
      <ProfileInfoBlock />
    </React.Fragment>
  )
}

export default App;
