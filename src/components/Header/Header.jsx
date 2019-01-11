import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import '../../styles/header.scss';

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
      render={() => (
        <header className="Header">
          <div className="Header__container constrained">
            <nav>
              <Link className="Header__link" to="/">About</Link>
              <Link className="Header__link" to="/contact">Contact</Link>
            </nav>
          </div>
        </header>
      )}
    />
  );
}

export default Header;
