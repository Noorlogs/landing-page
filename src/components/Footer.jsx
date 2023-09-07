// import React from 'react';
// import './css/footer.css';
// import cover from '../images/dataset-cover.jpg'

// function Footer() {
//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <div className="footer-logo">
//                     <img src={cover} alt="Pokemon Logo" />
//                     {/* <p>Gotta catch 'em all!</p> */}
//                 </div>
//                 <div className="footer-links">
//                     <a href="#">Home</a>
//                     <a href="#">Pokédex</a>
//                     <a href="#">Trainers</a>
//                     <a href="#">Battles</a>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4>Contact Us</h4>
                            <p>Email: info@pokemon.com</p>
                            <p>Phone: +123-456-7890</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Our Team</h4>
                            <ul>
                                <li>Ash Ketchum</li>
                                <li>Misty Waterflower</li>
                                <li>Brock Pewter</li>
                                <li>Team Rocket</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Our Blogs</h4>
                            <ul>
                                <li>Top 10 Legendary Pokemon</li>
                                <li>Pokemon Training Tips</li>
                                <li>Pokemon World Championships</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Our Products</h4>
                            <ul>
                                <li>Poke Balls</li>
                                <li>Pokemon Plushies</li>
                                <li>Pokemon Trading Cards</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <p className="text-center">© 2023 Pokemon, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>)
}
