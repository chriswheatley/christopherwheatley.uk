module.exports = {
  siteMetadata: {
    title: 'Christopher Wheatley',
    subtitle: 'Software Developer',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
  ],
};
