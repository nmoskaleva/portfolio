import React from 'react';
import { StyledForm, FormFields, FormButton } from './styled/Contact';

const Contact = () => {
  return (
    <section>
      <StyledForm
        action='https://formspree.io/f/maylkbez'
        method='POST'
        id='contactForm'
      >
        <FormFields>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' required />
          <label htmlFor='email '>Email</label>
          <input type='text' name='email' id='email' required />
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' rows='3' required></textarea>
        </FormFields>
        <FormButton type='submit'>Send Message</FormButton>
      </StyledForm>
    </section>
  );
};

export default Contact;
