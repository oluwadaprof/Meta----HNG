import React from 'react'
import Card from  '../card/Card'
import { brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8,} from './import'
import './features.css'

function Features() {
  const images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8]
  const imagesMap = images.map((img, i) => <Card key={i} image={img}/>)

  return (
    <div className='metabnb-feature'>
      <h1>Inspiration for your next adventure</h1>
      <div className='metabnb-feature_box'>{imagesMap}</div>
    </div>
  )
}

export default Features