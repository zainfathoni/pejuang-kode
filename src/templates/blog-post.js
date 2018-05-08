import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { Zain } from '../components/Bio'
import { Article } from '../components/Layout'

const ContextNav = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`

const Next = styled.li``
const Prev = Next.extend`
  margin-right: auto;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <Article>
        <Helmet>
          <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Zain />

        <ContextNav>
          {previous && (
            <Prev>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </Prev>
          )}

          {next && (
            <Next>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </Next>
          )}
        </ContextNav>
      </Article>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
