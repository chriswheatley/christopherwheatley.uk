import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import './layout.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}
          >
            <html lang="en-GB" />
          </Helmet>
          { children }
        </>
      )}
    />
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
