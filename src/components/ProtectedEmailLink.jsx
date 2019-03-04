import React from 'react';
import PropTypes from 'prop-types';
import {
  FaInfoCircle,
  FaEnvelope,
} from 'react-icons/fa';

const propTypes = {
  /* The email address encoded in base64 */
  base64Email: PropTypes.string.isRequired,
};

/**
 * Displays a button labelled with an email address. The button employs a couple of
 * techniques to hide the email address from email harvesting bots to significantly
 * reduce the amount of spam received.
 */
class ProtectedEmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    // Decode the email
    const { base64Email } = this.props;
    const email = window.atob(base64Email);

    this.setState({ email });
  }

  onClick() {
    // Open a new email in the user's mail client.
    const { email } = this.state;
    window.open(`mailto:${email}`, '_self', 'noopener, noreferrer');
  }

  render() {
    const { email } = this.state;

    if (!email) {
      // If javascript is enabled this warning will be replaced when a render is triggered after
      // componentDidMount has been invoked. Note that componentDidMount will only run inside a
      // browser environment.
      return (
        <span className="button button--cta">
          <FaInfoCircle className="button__icon" />
          Javascript required for Email
        </span>
      );
    }

    // Render the email address button.
    const emailReversed = email.split('').reverse().join('');

    return (
      <button
        className="button button--cta"
        onClick={this.onClick}
        type="button"
      >
        <FaEnvelope className="button__icon" />
        <span className="protected-email">{emailReversed}</span>
      </button>
    );
  }
}

ProtectedEmailButton.propTypes = propTypes;
export default ProtectedEmailButton;
