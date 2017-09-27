module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
  ],
  siteMetadata: {
    title: 'Luc Bouchard'
  }
}
