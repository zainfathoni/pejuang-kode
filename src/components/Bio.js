import React from 'react'
import styled from 'styled-components'
import Gravatar from 'react-gravatar'

import { Section } from './Layout'

const StyledSection = Section.extend`
  margin: 1em 0;
  display: flex;
  align-items: center;
`

const Avatar = styled(Gravatar)`
  border-radius: 50%;
  margin-bottom: 0;
`

const Details = styled.div`
  margin-left: 15px;
`

class Bio extends React.Component {
  render() {
    return (
      <StyledSection>
        <Avatar size={100} email="zain.fathoni@gmail.com" />
        <Details>
          Written by <strong>Zain Fathoni</strong>, a father, husband, and
          software engineering enthusiast who lives and works in Singapore.
          <br />You could reach him on&nbsp;
          <a href="https://t.me/zainfathoni">Telegram</a>.
        </Details>
      </StyledSection>
    )
  }
}

export default Bio
