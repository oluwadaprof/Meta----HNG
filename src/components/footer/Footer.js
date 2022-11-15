import React from 'react'
import { GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr';
import logo from '../../assests/Group1.png'
import './footer.css'

function Footer() {
  return (
    <div className='metabnb-footer'>
      <div className='metabnb-footer_wrapper'>
        <div className='metabnb-footer_wrapper-box'>
          <img src={logo} alt='logo'/>
          <div className='metabnb-footer_wrapper-logo'>
            <GrFacebookOption />
            <GrInstagram />
            <GrTwitter/>
          </div>
        </div>
        <div>
          <h3>Community</h3>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Lanlords</p>
          <p>Discord</p>
        </div>
        <div>
          <h3>Places</h3>
          <p>Castle</p>
          <p>Farm</p>
          <p>Beach</p>
          <p>Learn More</p>
        </div>
        <div>
          <h3>About us</h3>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
      <p className='metabnb-footer_cr'> © 2022 Metabnb</p>
    </div>
  )
}

export default Footer