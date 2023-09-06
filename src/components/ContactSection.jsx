import React from 'react'
import './css/contactSection.css';

export default function ContactSection() {
    return (
        <div className="container">
            <section className="contact-section">
                <div className="contact-container">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Reach out to us with your questions or feedback.</p>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message" />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>

        </div>
    );
}