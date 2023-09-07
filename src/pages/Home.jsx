import React from 'react'
import HeaderSec from '../components/HeaderSec'
import About from '../components/About'
import ContactSection from '../components/ContactSection'
import BlogSec from '../components/blogSec'
import Customcard from '../components/custom/Customcard'
import TextSec from '../components/TextSec'

export default function Home() {
    return (
        <>
            <HeaderSec />
            <About />
            <BlogSec />
            <Customcard />
            <TextSec />
            <ContactSection />
        </>
    )
}
