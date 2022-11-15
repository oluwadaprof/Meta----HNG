import React, { useState } from 'react'
import { GoSettings } from 'react-icons/go'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Card } from '../../components'
import { Navbar, Footer } from '../../components'
import {
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8,
  brand9, brand10, brand11, brand12, brand13, brand14, brand15, brand16
} from './import'
import './nfts.css'

function NFTs() {
  const [dropMenu, setDropMenu] = useState(false)

  const images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8,
    brand9, brand10, brand11, brand12, brand13, brand14, brand15, brand16]
  const imagesMap = images.map((img, i) => <Card key={i} image={img} />)

  return (
    <div className='metabnb-nfts'>
      <Navbar />
      <div className='metabnb-nfts_container1'>
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>Fantast city</p>
        <p>Beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <button>Location <GoSettings className='setting' /></button>
      </div>
      <div className='metabnb-nfts_show'>
        <button className='nft-button1'>Resturant <RiArrowDropDownLine size={30} onClick={() => setDropMenu(prevstate => !prevstate)} /></button>
        <button className='nft-button2'>Location <GoSettings className='setting' /></button>
      </div>
      {dropMenu &&
        <div className='metabnb-nfts_dropmenu'>
          <p>Resturant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>Fantast city</p>
          <p>Beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
        </div>}
      <div className='metabnb-nfts_container2'>{imagesMap}</div>
      <Footer />
    </div>
  )
}

export default NFTs