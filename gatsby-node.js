const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');
const fs = require('fs-extra');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type == 'MarkdownRemark') {
        const fileNode = getNode(node.parent);
        const slug = '/' + fileNode.sourceInstanceName + '/' + fileNode.name + '/';
        
        // Copy logo image
        let image = path.join(fileNode.dir, fileNode.name + '.png');
        if (fs.pathExistsSync(image)) {
          fs.copySync(image, path.join('public', fileNode.name + '.png'));
        } else {
          console.error('\nWARNING: No image found for post: ' + fileNode.name);
        }

        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
        createNodeField({
            node,
            name: 'type',
            value: fileNode.sourceInstanceName
        });
        createNodeField({
            node,
            name: 'name',
            value: fileNode.name
        });
    }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
  ).then(result => {
        result.data.allMarkdownRemark.edges.map(({ node }) => {
            createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/project.tsx`),
            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
            })
        })
        resolve()
      })
    })
  }