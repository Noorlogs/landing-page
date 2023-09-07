import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function TextSec() {
    const textSecIcon = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5e1cbb16753725.562b0caf88c52.PNG';
    const containerStyle = {
        border: '1px solid black', // Add a thin black border
        padding: '15px',
        marginBottom: '20px',
    };

    return (
        <>
            <div className="container mb-4" style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2 className="text-center mb-4 display-4">
                    Welcome to the World of Pokémon!
                </h2>
                <p>
                    Dive into the captivating universe of Pokémon where adventure, friendship, and discovery await you at every turn.
                </p>
                <div style={containerStyle}>
                    <Row>
                        <Col md={6}>
                            <div className="d-flex align-items-center mb-3">
                                <img src={textSecIcon} alt="Icon 1" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                                <h4>Explore New Worlds</h4>
                                <p>Embark on thrilling journeys to uncharted territories and uncover hidden treasures.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex align-items-center mb-3">
                                <img src={textSecIcon} alt="Icon 2" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                                <h4>Train Your Pokémon</h4>
                                <p>Build a strong bond with your Pokémon companions and hone their skills in epic battles.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="d-flex align-items-center mb-3">
                                <img src={textSecIcon} alt="Icon 3" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                                <h4>Join Pokémon Contests</h4>
                                <p>Show off your Pokémon's unique talents in exciting contests and competitions.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex align-items-center mb-3">
                                <img src={textSecIcon} alt="Icon 4" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                                <h4>Connect with Fellow Trainers</h4>
                                <p>Meet and collaborate with trainers from around the world, forming bonds that last a lifetime.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
