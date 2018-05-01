import React from 'react'

import { Section } from './Layout'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <Section>
        <img src={profilePic} alt={`Kyle Mathews`} />
        Written by <strong>Kyle Mathews</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </Section>
    )
  }
}

export default Bio
