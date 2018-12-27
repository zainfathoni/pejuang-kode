import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { faCode } from '@fortawesome/pro-regular-svg-icons'
import 'prismjs/themes/prism-tomorrow.css'

import Layout, { Header, Main, Footer } from '../components/Layout'
import Icon from '../components/Icon'

function Heading({ pathname, children }) {
  if (pathname === '/') {
    return <h1>{children}</h1>
  } else {
    return <h3>{children}</h3>
  }
}

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <Layout>
        <Helmet>
          <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
          <meta name="theme-color" content="#0ab44d" />
        </Helmet>
        <Header>
          <Heading pathname={location.pathname}>
            <Link to={'/'}>
              <Icon icon={faCode} /> Pejuang Kode
            </Link>
          </Heading>
        </Header>
        <Main>{children()}</Main>
        <Footer>
          <div>&copy; 2018</div>
        </Footer>
      </Layout>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template
