import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import faCalendarAlt from '@fortawesome/fontawesome-pro-light/faCalendarAlt'
import faClock from '@fortawesome/fontawesome-pro-light/faClock'
import Icon from '../components/Icon'

import { Zain, Galih } from '../components/Bio'
import { Article } from '../components/Layout'

const TimeSection = styled.div`
  margin-bottom: 16px;
  opacity: 0.6;
  font-size: 0.8em;
`
const ContextNav = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`
const Next = styled.li``
const Prev = Next.extend`
  margin-right: auto;
`

const authorBio = {
  zain: <Zain />,
  galih: <Galih />,
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    const date = new Date(post.frontmatter.date)
    const today = new Date()

    return (
      <Article>
        <Helmet>
          <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <TimeSection>
          <time>
            <Icon icon={faCalendarAlt} />&nbsp;
            {date.toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'short',
              year:
                today.getFullYear() === date.getFullYear()
                  ? undefined
                  : 'numeric',
            })}
          </time>
          &nbsp;<strong>&middot;</strong>&nbsp;
          <span>
            <Icon icon={faClock} /> {post.timeToRead} menit
          </span>
        </TimeSection>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <h4>Kontributor</h4>
        {authorBio[post.frontmatter.author]}

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
        owner
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`
