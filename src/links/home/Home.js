import React from 'react'
import { Brand, Features, Footer, Header, Navbar, About } from '../../components';
import './home.css'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Brand/>
      <Features/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home