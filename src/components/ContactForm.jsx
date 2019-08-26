import React from 'react'

const ContactForm = ({handleOnChange, handleOnSubmit, name, subject, email, message, messageSent}) => {
  if(!messageSent){
    return(
      <form method="POST" data-netlify="true" name="contact" onSubmit={handleOnSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className='input-ctn'>
          <label htmlFor='name'>Name</label>
          <input onChange={handleOnChange} name='name' type='text' value={name} required/>
        </div>
        <div className='input-ctn'>
          <label htmlFor='subject'>Subject</label>
          <input onChange={handleOnChange} name='subject' type='text' value={subject}  required/>
        </div>
        <div className='input-ctn'>
          <label htmlFor='email'>Email Address</label>
          <input onChange={handleOnChange} name='email' type='email' value={email} required/>
        </div>
        <div className='input-ctn'>
          <label htmlFor='message'>Message</label>
          <textarea onChange={handleOnChange} name='message' rows='5' value={message} required ></textarea>
        </div>
        <button id='contact-btn'>Contact Me</button>
  
      </form>
    )
  }else{
    return(
      <h1 className='thank-you'>Thank you!</h1>
    )
  }
  
}

export default ContactForm