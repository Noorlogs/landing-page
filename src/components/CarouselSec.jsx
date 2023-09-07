import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/carousel.css'
export default function CarouselSec() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700074662.jpg"
                        alt="First slide"
                        className="imgCarousel"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.pixelstalk.net/wp-content/uploads/images6/Cute-Pokemon-HD-Wallpaper-Free-download.jpg"
                        alt="Second slide"
                        className="imgCarousel"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://wallpapercave.com/wp/wp2054976.jpg"
                        alt="Third slide"
                        className="imgCarousel"
                    />
                </Carousel.Item>

            </Carousel>
        </>
    )
}
