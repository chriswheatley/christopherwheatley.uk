import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="constrained">
        <div className="Footer__container constrained">
          Built with&nbsp;
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
