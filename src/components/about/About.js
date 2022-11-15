import React from 'react'
import image from '../../assests/Frame59546.png'
import './about.css'

function About() {
  return (
    <div className='metabnb-about'>
      <div className='metabnb-about_box1'>
        <h3>
          Metabnb NFTs
        </h3>
        <p>Discover our NFT gift card collection. Loyal customers gets amazing gift cards
          which are traded as NFTs. These NFTs gives our customer access to loads of our 
          exclusive services.
        </p>
        <button>Learn more</button>
      </div>
      <div className='metabnb-about_box2'>
        <img src={image} alt='nft'/>
      </div>
    </div>
  )
}

export default About