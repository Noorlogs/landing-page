import React from 'react'
import UserNavBar from './components/navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <UserNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
