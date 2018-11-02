import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './layout.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en-GB" />
      </Helmet>
      { children }
    </>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
