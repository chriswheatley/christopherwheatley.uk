module.exports = {
  siteMetadata: {
    title: 'Christopher Wheatley',
    subtitle: 'Software Developer',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.christopherwheatley.uk',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Christopher Wheatley',
        short_name: 'Christopher Wheatley',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#5652c5',
        icon: 'src/images/icon.png',
        include_favicon: true,
      },
    },
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
