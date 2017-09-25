module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
       resolve: 'gatsby-source-filesystem',
       options: {
          path: '${__dirname}/src/projects',
          name: 'projects'
       }
    }
  ],
  siteMetadata: {
    title: 'Luc Bouchard'
  }
}
