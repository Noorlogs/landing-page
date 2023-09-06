import React from 'react';
import './css/footer.css';
import cover from '../images/dataset-cover.jpg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={cover} alt="Pokemon Logo" />
                    {/* <p>Gotta catch 'em all!</p> */}
                </div>
                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">Pokédex</a>
                    <a href="#">Trainers</a>
                    <a href="#">Battles</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
