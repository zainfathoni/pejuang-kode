import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Zain, Galih } from '../components/Bio'
import { Article } from '../components/Layout'
import TimeLabel from '../components/TimeLabel'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const today = new Date()

    return (
      <React.Fragment>
        <Helmet title={siteTitle} />
        <h2>Artikel</h2>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const timeLabelProps = {
            today,
            date: new Date(node.frontmatter.date),
            timeToRead: node.timeToRead,
          }
          return (
            <Article key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <TimeLabel {...timeLabelProps} />
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Article>
          )
        })}
        <hr />
        <h4>Kontributor</h4>
        <Zain />
        <Galih />
      </React.Fragment>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
