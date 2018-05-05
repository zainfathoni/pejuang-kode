import React from 'react'
import styled from 'styled-components'

import media from '../utils/media'

const gradientBox = `linear-gradient(
  150deg,
  rgb(10, 180, 77) 10%,
  rgb(9, 179, 175) 70%,
  rgb(9, 179, 175) 94%
)`
const gradientText = `linear-gradient(
  130deg,
  #0ab44d 0%,
  #09b3af 100%
)`

export const Main = styled.main`
  flex: 1;
  max-width: 740px;
  width: 100%;
  padding: 0 1em;
  margin: 0 auto;
  a {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: ${gradientText};
  }
`

export const Header = styled.header`
  margin-bottom: 1.45rem;
  background-image: ${gradientBox};
  h1,
  h3 {
    max-width: 740px;
    padding: 1em;
    margin: 0 auto;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`

export const Section = styled.section``

export const Article = styled.article`
  .gatsby-highlight {
    margin: 0 -1em 1.45rem -1em;
    overflow: auto;

    pre[class*='language-'] {
      padding: 1em;
      ${media.tablet`border-radius: .75em;`};

      .gatsby-highlight-code-line {
        background-color: #14161a;
        display: block;
        margin: 0 -1em;
        padding: 0 1em 0 0.6em;
        border-left: 0.4em solid #f08d49;
      }
    }
  }
`

export const Footer = styled.footer`
  background-image: ${gradientBox};
  div {
    max-width: 740px;
    padding: 1em;
    margin: 0 auto;
    text-align: center;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default Layout
