import React, { useState, useEffect } from 'react';
import { StyledForm, FormFields, FormButton } from './styled/Contact';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  return (
    <section>
      {success && <p style={{ color: 'green' }}>Thanks for your message! </p>}
      <StyledForm
        name='contact'
        method='POST'
        action='/contact/?success=true'
        data-netlify='true'
      >
        <input type='hidden' name='form-name' value='contact' />
        <FormFields>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' required />
          <label htmlFor='email '>Email</label>
          <input type='email' name='email' id='email' required />
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' rows='3' required></textarea>
        </FormFields>
        <FormButton type='submit'>Send Message</FormButton>
      </StyledForm>
    </section>
  );
};

export default Contact;
