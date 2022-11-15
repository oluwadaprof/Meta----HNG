import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, PTS, Community, NFTs} from './links';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pts' element={<PTS />} />
        <Route path='/nfts' element={<NFTs />} />
        <Route path='/community' element={<Community />} />
      </Routes>
  )
}

export default App