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
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: "100%",
              height: 400,
              related: false,
              noIframeBorder: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-54130462-1',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
  ],
  siteMetadata: {
    title: 'Luc Bouchard'
  }
}
