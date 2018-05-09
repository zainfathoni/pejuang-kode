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
    <strong>Zain Fathoni</strong> adalah seorang Senior Software Engineer di{' '}
    <a href="https://www.ninjavan.co">Ninja Van</a> Singapura. Kini ia sangat
    tertarik dengan JavaScript dan React beserta ekosistemnya.<br />
    Anda dapat menghubunginya melalui{' '}
    <a href="https://m.me/zain.fathoni.page">Facebook Messenger</a>.
  </Bio>
)

export const Galih = () => (
  <Bio email="hi@galihpratama.net">
    <strong>Galih Pratama</strong> adalah pemilik dari{' '}
    <a href = "https://belajarkoding.net"> BelajarKoding </a> dan 
    Head Front-end di <a href="https://crowde.co">BelajarKoding</a> .<br />
    Sudah membuat lebih dari 30+ aplikasi dan 100+ video tutorial.
    <br />
    Anda dapat menghubunginya melalui{' '}
    <a href="mailto:hi@galihpratama.net">Email</a>.
  </Bio>
)
