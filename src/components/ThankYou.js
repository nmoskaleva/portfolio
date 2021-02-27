import React from 'react';
import { Link } from 'react-router-dom';
import { ThankYouSection } from './styled/ThankYou';

const ContactSuccess = () => {
  return (
    <ThankYouSection>
      <h1>Thanks for your message!</h1>
      <Link to='/'>Back to homepage</Link>
    </ThankYouSection>
  );
};

export default ContactSuccess;
