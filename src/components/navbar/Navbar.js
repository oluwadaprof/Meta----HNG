import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import metamask from '../../assests/image66.png'
import walletcon from '../../assests/image69.png'
import logo from '../../assests/Group.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { FaGreaterThan } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [wallet, setWallet] = useState(false)

  return (
    <div className='metabnb-navbar '>
      <div className='metabnb-navbar_img'>
        <img src={logo} alt='metabnb-logo' />
      </div>
      <div className='metabnb-navbar_link'>
        <Link to='/'>Home</Link>
        <Link>Place To Stay</Link>
        <Link to='/nfts'>NFTs</Link>
        <Link>Community</Link>
      </div>
      <div className='metabnb-navbar_btn '>
        <button onClick={() => setWallet(true)}>Connect wallet</button>
      </div>
      <div className='metabnb-navbar_menu'>
        {toggleMenu
          ? <RiCloseLine className='icon close' color="black" size={40} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line className='icon' color="black" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='br'>
            <div className='metabnb-navbar_menu-link'>
              <Link to='/'>Home</Link>
              <Link>Place To Stay</Link>
              <Link to='/nfts'>NFTs</Link>
              <Link>Community</Link>
            </div>
          </div>)}
      </div>
      <>
        {wallet &&
            <div className='metabnb-navbar_cw '>
              <div className='metabnb-navbar_cw-select'>
                <div className='metabnb-navbar_cw-select-box1'>
                  <h3>Connect Wallet</h3>
                  <GrClose className='cw-close' onClick={() => setWallet(false)} />
                </div>
                <hr />
                <div className='metabnb-navbar_cw-select-box2'>
                  <p>Choose your preffered wallet:</p>
                  <button><img src={metamask} alt='metamask' /> Metamask <FaGreaterThan className='icon-mg' /> </button>
                  <button><img src={walletcon} alt='walletconnect' /> WalletConnect <FaGreaterThan className='icon-mg' /> </button>
                </div>
              </div>
            </div>
        }
      </>
    </div>
  )
}

export default Navbar