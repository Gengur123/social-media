import React from 'react'
import './ProfileInfoBlock.css'

function ProfileInfoBlock ({ tweetCount }) {

  return (
    <section class="profile-info-block">
      <p>Allister Kays</p>
      <div className="row">
        <p>TWEETS <span>{ tweetCount }</span></p>
        <p>FOLLOWING <span>0</span></p>
        <p>FOLLWERS <span>0</span></p>
      </div>
    </section>
  )
}

export default ProfileInfoBlock;
