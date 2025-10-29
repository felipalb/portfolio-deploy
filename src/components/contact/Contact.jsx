import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_py9mqft', 'template_3hknl8f', form.current, '0Ba-zcJd7iR5uaxC0')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Call me now to</h5>
      <h2>Talk!</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <a href='mailto:felipealbertosantos@outlook.com'>Contact me!</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <a href='https://api.whatsapp.com/send?phone=5519999929394'>Message me!</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your name' required />
            <input type="email" name="email" placeholder='your email' required />
            <textarea type="message" name="name" placeholder='Type your message...' required></textarea>
            <button type="submit" className='btn btn-primary'>Get in touch</button>
          </form>
      </div>
    </section>
  )
}

export default Contact