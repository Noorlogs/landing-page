import React from 'react'
import CarouselSec from './CarouselSec'
import Card from 'react-bootstrap/Card';
import BlogSecBtn from './custom/BlogSecBtn';

export default function BlogSec() {

    const containerStyle = {
        border: '1px solid black', // Add a thin black border
        padding: '15px',
        marginBottom: '20px',
    };

    return (
        <>
            <div className="container mb-4" style={containerStyle}>
                <div className="row">
                    <div className="col mb-2">
                        <CarouselSec />
                    </div>
                    <div className="col mb-2">
                        <Card className="" style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                            <Card.Header>
                                <h2 className="mb-4 display-5">Pokémon Chronicles</h2>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Dive into the captivating world of Pokémon through our blog.</Card.Title>
                                <Card.Text>
                                    Here, you'll find a treasure trove of articles, stories, and insights about trainers' adventures,
                                    legendary encounters, and tips to become a Pokémon Champion.
                                    Join us on a quest to unravel the mysteries of the Pokémon universe.
                                </Card.Text>
                                <BlogSecBtn />
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
