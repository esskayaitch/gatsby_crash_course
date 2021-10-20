/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blog-post.js")

  const blogPosts = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              author
              date
              path
              title
            }
          }
        }
      }
    }
  `)
  // .then(res => {
  //   if (res.errors) {
  //     return Promise.reject(res.errors)
  //   }
  // })

  console.log("-----------------------------------------------------")
  console.log(blogPosts.data.allMarkdownRemark.edges)
  console.log("-----------------------------------------------------")

  blogPosts.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: postTemplate,
    })
  })
}
