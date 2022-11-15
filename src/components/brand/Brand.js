import React from 'react'
import './brand.css'
import brand1 from '../../assests/Group59537.png'
import brand2 from '../../assests/Group4040.png'
import brand3 from '../../assests/Frame4041.png'

function Brand() {
  return (
    <div className='metabnb-brand'>
      <img src={brand1} alt='mbtoken'/>
      <img src={brand2} alt='metamask'/>
      <img src={brand3} alt='opensea'/>
    </div>
  )
}

export default Brand