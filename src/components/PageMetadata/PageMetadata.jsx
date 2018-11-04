import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const defaultProps = {
  title: '',
  description: '',
};

class PageMetadata extends React.Component {
  /**
   * Generates the full title for the given page. This is expected to be composed of the page's
   * title and site's title.
   * @param {string} title The page's title
   * @param {string} siteTitle The site's title.
   * @returns {string} The full title for this page.
   */
  static getPageTitle(title, siteTitle) {
    let pageTitle = siteTitle;

    if (title) {
      pageTitle = `${title} | ${siteTitle}`;
    }

    return pageTitle;
  }

  /**
   * Limit the given description to a maxiumum length of 155, which is seo friendly.
   * @param {string} description The description
   * @returns {string} The seo friendly description.
   */
  static getSeoDescription(description = '') {
    return `${description}`.substring(0, 155);
  }

  render() {
    const {
      title,
      description,
    } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query PageMetadataQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Helmet>
            <title>{PageMetadata.getPageTitle(title, data.site.siteMetadata.title)}</title>
            <meta name="description" content={PageMetadata.getSeoDescription(description)} />
          </Helmet>
        )}
      />
    );
  }
}

PageMetadata.propTypes = propTypes;
PageMetadata.defaultProps = defaultProps;

export default PageMetadata;
