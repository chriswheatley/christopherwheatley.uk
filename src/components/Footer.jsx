import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content constrained">
        <div>
          <div>Built by Christopher Wheatley</div>
          <div>
            <a
              className="footer__link"
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with GatsbyJS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
