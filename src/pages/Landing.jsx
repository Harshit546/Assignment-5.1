import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Front from '../components/Front/Front'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Team from '../components/Team/Team'
import Projects from '../components/Projects/Projects'
import Clients from '../components/Clients/Clients'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Landing = () => {
  return (
    <>
      <Navbar/>
      <Front/>
      <About/>
      <Services/>
      <Team/>
      <Projects/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Landing
