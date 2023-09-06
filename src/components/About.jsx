import React from 'react';
import '../components/custom/aboutCard.css';
import '../components/css/about.css';
import pokemonImage from '../images/Pokemon-diamond-and-pearl-group.png';

export default function About() {
    return (
        <div className="container">
            <div className="about-section">
                <div className="about-content">
                    <div className="about-column">
                        <h2 className="about-heading">About</h2>
                        <p className="about-text">
                            Welcome to the captivating world of Pokémon! Explore a diverse collection
                            of creatures, battle fierce opponents, and embark on thrilling adventures.
                            Join us on this epic journey to become a Pokémon Master!
                        </p>
                        <div className="about-buttons">
                            <button className="about-button">Learn More</button>
                            <button className="about-button">Get Started</button>
                        </div>
                    </div>
                    <div className="about-column card-container">
                        <div className="aboutCard">
                            <div className="content">
                                <div className="back">
                                    <div className="back-content">
                                        <img src={pokemonImage} alt="Pokemon Group" width="80%" height="65%" />
                                        <strong>I choose you!</strong>
                                    </div>
                                </div>
                                <div className="front">
                                    <div className="img">
                                        <div className="circle"></div>
                                        <div className="circle" id="right"></div>
                                        <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                        <small className="badge">Pokemon</small>
                                        <div className="description">
                                            <div className="title">
                                                <p className="title">
                                                    <strong>Ash And Friends</strong>
                                                </p>
                                                <svg
                                                    fillRule="nonzero"
                                                    height="15px"
                                                    width="15px"
                                                    viewBox="0,0,256,256"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        style={{ mixBlendMode: "normal" }}
                                                        textAnchor="none"
                                                        fontSize="none"
                                                        fontWeight="none"
                                                        fontFamily="none"
                                                        strokeDashoffset={0}
                                                        strokeDasharray=""
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="miter"
                                                        strokeLinecap="butt"
                                                        strokeWidth={1}
                                                        stroke="none"
                                                        fillRule="nonzero"
                                                        fill="#20c997"
                                                    >
                                                        <g transform="scale(8,8)">
                                                            <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <p className="card-footer">I want to be the very best, like no one ever was. To catch them is my real test, to train them is my cause</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}