import React from 'react'
import About from './About'
import ContactSection from '../components/ContactSection'

export default function Home() {

    const dividerStyle = {
        borderTop: '2px solid #fff',
        margin: '0 25%',
        width: '50%',

    }

    return (
        <>

            <hr style={dividerStyle} />
            <About />
            <hr style={dividerStyle} />
            <ContactSection />
            <hr style={dividerStyle} />
        </>
    )
}
