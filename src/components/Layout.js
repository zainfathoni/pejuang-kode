import React from 'react'
import styled from 'styled-components'

export const Main = styled.main`
  flex: 1;
  max-width: 740px;
  padding: 0 20px;
  margin: 0 auto;
`

export const Header = styled.header`
  background-image: linear-gradient(
    150deg,
    rgb(10, 180, 77) 10%,
    rgb(9, 179, 175) 70%,
    rgb(9, 179, 175) 94%
  );
  h1,
  h3 {
    max-width: 740px;
    padding: 20px;
    margin: 0 auto;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`

export const Section = styled.section``

export const Article = styled.article``

export const Footer = styled.footer`
  background-image: linear-gradient(
    150deg,
    rgb(10, 180, 77) 10%,
    rgb(9, 179, 175) 70%,
    rgb(9, 179, 175) 94%
  );
  div {
    max-width: 740px;
    padding: 20px;
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
