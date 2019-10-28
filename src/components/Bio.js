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

const Bio = ({ email, children }) => (
  <StyledSection>
    <Avatar size={100} email={email} />
    <Details>{children}</Details>
  </StyledSection>
)

export default Bio

export const Zain = () => (
  <Bio email="zain.fathoni@gmail.com">
    <a href="https://www.zainfathoni.com" target="_blank">
      <strong>Zain Fathoni</strong>
    </a>{' '}
    adalah seorang{' '}
    <a href="https://www.linkedin.com/in/zainfathoni/" target="_blank">
      Senior Software Engineer
    </a>{' '}
    di{' '}
    <a href="https://www.ninjavan.co" target="_blank">
      Ninja Van
    </a>{' '}
    Singapura. Kini ia sangat tertarik dengan JavaScript dan React beserta
    ekosistemnya.
    <br />
    Anda dapat menghubunginya melalui{' '}
    <a href="https://m.me/zain.fathoni.page" target="_blank">
      Facebook Messenger
    </a>{' '}
    atau{' '}
    <a href="https://t.me/zainfathoni" target="_blank">
      Telegram
    </a>
    .<br />
    <br />
    Silakan <em>subscribe</em> ke{' '}
    <a href="https://t.me/pejuangkode" target="_blank">
      Channel Telegram Pejuang Kode
    </a>{' '}
    untuk menyimak tulisan-tulisan berikutnya di blog ini.
  </Bio>
)
