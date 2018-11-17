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
            <div className="Header__title" to="/">{data.site.siteMetadata.title}</div>
            <nav>
              <Link className="Header__link" to="/about">About Me</Link>
              <Link className="Header__link" to="/curriculum-vitae">Curriculum Vitae</Link>
              <Link className="Header__link" to="/contact">Contact</Link>
            </nav>
          </div>
        </header>
      )}
    />
  );
}

export default Header;
