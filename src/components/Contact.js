import React from 'react';
import { StyledForm, FormFields, FormButton } from './styled/Contact';

const Contact = () => {
  return (
    <section>
      <StyledForm
        name='contact'
        method='POST'
        action='/thank-you'
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
