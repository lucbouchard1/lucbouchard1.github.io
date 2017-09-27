module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
  ],
  siteMetadata: {
    title: 'Luc Bouchard'
  }
}
