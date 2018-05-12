import React from 'react'
import styled from 'styled-components'

import media from '../utils/media'

const gradient = `linear-gradient(
  150deg,
  rgb(10, 180, 77) 10%,
  rgb(9, 179, 175) 70%,
  rgb(9, 179, 175) 94%
)`

export const Main = styled.main`
  flex: 1;
  max-width: 740px;
  width: 100%;
  padding: 0 1em;
  margin: 0 auto;
  a {
    color: #0ab44d;
    &:not(:hover) {
      text-decoration: none;
    }
  }
`

export const Header = styled.header`
  margin-bottom: 1.45rem;
  background-image: ${gradient};
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
    background-color: #2d2d2d;
    ${media.tablet`border-radius: .75rem;`};
    margin: 0 -1rem 1.45rem -1rem;
    padding: 1rem;
    overflow: auto;

    pre[class*='language-'] {
      margin: 0;
      padding: 0;
      overflow: initial;
      float: left;
      min-width: 100%;

      .gatsby-highlight-code-line {
        background-color: #14161a;
        display: block;
        margin: 0 -1rem;
        padding: 0 1rem 0 0.7rem;
        border-left: 0.3rem solid #f08d49;
      }
    }
  }

  & :not(pre) > code[class*="language-"] {
    padding: .1em .3em;
    border-radius: .2em;
`

export const Footer = styled.footer`
  background-image: ${gradient};
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
