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
    <div className="Layout">
      <Helmet>
        <html lang="en-GB" />
      </Helmet>
      <header className="Layout__header">
        <Header />
      </header>
      <main className="Layout__content">{ children }</main>
      <footer className="Layout__footer">
        <Footer />
      </footer>
    </div>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
