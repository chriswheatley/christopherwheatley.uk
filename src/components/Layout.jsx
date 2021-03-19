import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from './Footer';

import '@fontsource/ubuntu/latin.css';
import '@fontsource/open-sans/latin.css';
import '../styles/layout.scss';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
        <html lang="en-GB" />
      </Helmet>
      <main className="layout__content">{ children }</main>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
