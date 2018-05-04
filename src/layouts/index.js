import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCode from '@fortawesome/fontawesome-pro-regular/faCode'
import 'prismjs/themes/prism-tomorrow.css'

import Layout, { Header, Footer } from '../components/Layout'

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
        <Header>
          <Heading pathname={location.pathname}>
            <Link to={'/'}>
              <FontAwesomeIcon icon={faCode} /> Pejuang Kode
            </Link>
          </Heading>
        </Header>
        {children()}
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
