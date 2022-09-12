import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3vniits', 'template_pk7974v', form.current, 'bpcb7LlA_s1aWIdp2')

        e.target.reset()

    


    };









    return (

        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'  />
                        <h4>Email</h4>
                        <h5>juliorecinos30@gmail.com</h5>
                        <a href="mailto:juliorecinos30@gmail.com" target="_blank" rel="noreferrer">Send an Email Message</a>


                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>cefjulio</h5>
                        <a href="https://m.me/cefjulio.arec" target="_blank" rel="noreferrer" >Send a Facebook Message</a>


                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>502 30504456</h5>
                        <a href="https://api.whatsapp.com/send?phone=50230504456" target="_blank" rel="noreferrer">Send a WhatsApp Message</a>


                    </article>



                </div>
                {/* End of Contact Options */}
                <form ref={form} onSubmit={sendEmail}   >
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message"  rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'  >Send Message</button>
                </form>

            </div>







        </section >
    )



}
export default Contact