import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import './Header.scss';

function Header() {
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={data => (
        <div className="Header">
          <div className="Header__container constrained">
            <div className="Header__brand" to="/">
              <h1 className="Header__title">{data.site.siteMetadata.title}</h1>
              <div className="Header__subtitle">{data.site.siteMetadata.subtitle}</div>
            </div>
            <nav>
              <div>
                <Link className="Header__link" to="/about">About Me</Link>
                <Link className="Header__link" to="/curriculum-vitae">Curriculum Vitae</Link>
                <Link className="Header__link" to="/contact">Contact</Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    />
  );
}

export default Header;
