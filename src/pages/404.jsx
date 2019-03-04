import React from 'react';
import { Link } from 'gatsby';
import { FaArrowRight } from 'react-icons/fa';
import Layout from '../components/Layout';
import PageMetadata from '../components/PageMetadata';

export default () => (
  <Layout>
    <PageMetadata title="Not Found" />
    <div className="panel panel--pageHeader">
      <h1 className="panel__header">
        404 - Not Found
      </h1>
    </div>
    <div className="panel">
      <div className="panel__body">
        Sorry, the page you were looking for does not exist. This might be because:
        <ul>
          <li>There is a typo in the url or address bar.</li>
          <li>The page has been moved.</li>
          <li>The page has been deleted.</li>
          <li>The page has been removed temporarily.</li>
        </ul>
        <Link to="/" className="button">
          <FaArrowRight className="button__icon" />
          Return to site home
        </Link>
      </div>
    </div>
  </Layout>
);
