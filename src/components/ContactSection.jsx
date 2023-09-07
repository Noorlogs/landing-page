import React from 'react';
import './css/contactSection.css';

export default function ContactSection() {
    const backgroundImage = 'https://wallpapers.com/images/hd/pokemon-aesthetic-ukn7d49iobw19qsi.jpg';

    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <section style={sectionStyle}>
            <div className="container" >
                <div className="row">
                    <div className="col contact-left bg-dark " style={{ zIndex: 1, flex: '1', height: '70%', width: '100%' }}>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea placeholder="Your Message" />
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="col contact-right text-light" style={{ zIndex: 1, flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '50px' }}>
                        <h2>Contact Us</h2>
                        <p>We'd love to hear from you! Reach out to us with your questions or feedback.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cupiditate perferendis minus ut, fuga rerum nemo quidem quos vitae, labore aliquam, architecto recusandae dolor sapiente harum. Eveniet, ad nam. Architecto ad minus ipsa laboriosam porro explicabo inventore laudantium repudiandae quidem!</p>

                    </div>
                </div>
            </div>
        </section>
    );
}
