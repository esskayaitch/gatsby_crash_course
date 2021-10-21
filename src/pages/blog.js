import { Link, graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogHome = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <h1>Blog! </h1>
    <h2>Latest Posts</h2>

    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by: {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <br />
        <Link to={post.node.frontmatter.path}>Read more...</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "Y-MMM-DD")
            path
            title
          }
        }
      }
    }
  }
`

export default BlogHome
