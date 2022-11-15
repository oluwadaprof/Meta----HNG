import React from 'react'
import star from '../../assests/Frame59528.png'
import './card.css'

function Card({image}) {
  return (
    <div className='metabnb-card'>
        <img className='img1' src={image} alt='nft'/>
        <div className='metabnb-card_flex'>
        <div className='metabnb-card_container1'>
            <p>Desert King</p>
            <p>2345km away</p>
        </div>
        <div className='metabnb-card_container2'>
            <p><span>1MBT per night</span></p>
            <p>available for 2weeks stay</p>
        </div>
        </div>
        <img className='img2' src={star} alt='star'/>
    </div>
  )
}

export default Card