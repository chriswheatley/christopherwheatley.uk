import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

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
        <header className="header">
          <div className="header__container constrained">
            <nav>
              <Link className="header__link" to="/">About</Link>
              <Link className="header__link" to="/contact">Contact</Link>
            </nav>
          </div>
        </header>
      )}
    />
  );
}

export default Header;
