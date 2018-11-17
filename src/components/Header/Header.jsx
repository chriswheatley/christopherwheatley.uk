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
            }
          }
        }
      `}
      render={data => (
        <header className="Header">
          <div className="Header__container constrained">
            <div className="Header__brand" to="/">
              <div className="Header__title">{data.site.siteMetadata.title}</div>
            </div>
            <nav>
              <div>
                <Link className="Header__link" to="/about">About Me</Link>
                <Link className="Header__link" to="/curriculum-vitae">Curriculum Vitae</Link>
                <Link className="Header__link" to="/contact">Contact</Link>
              </div>
            </nav>
          </div>
        </header>
      )}
    />
  );
}

export default Header;
