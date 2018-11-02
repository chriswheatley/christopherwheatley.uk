import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';


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
      <Header />
      { children }
      <Footer />
    </>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
