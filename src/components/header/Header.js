import React from 'react'
import nft from '../../assests/Group4028.png'
import './header.css'

function Header() {
  return (
    <div className='metabnb-header'>
      <div className='metabnb-header_text'>
        <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
        <p>We provide you access to luxury and affordable houses
          in the metaverse, get a chance to turn your imagination to reality at yourcomfort zone.
        </p>
        <input type='text' placeholder='search for location'/>
        <button>search</button>
      </div>
      <div className='metabnb-header_img'>
        <img src={nft} alt='nft'/>
      </div>
    </div>
  )
}

export default Header