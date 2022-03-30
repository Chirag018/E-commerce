import React, { useState } from 'react'
import './Collections.css';
import Sneakers from './Sneakers/Sneakers';
import Slippers from './Slippers/Slippers';
import { Link, Route, Routes } from 'react-router-dom';
import Shoes from './Shoes/Shoes';

function Collection() {

  const [show, setShow] = useState(false);

  return (
    <>
      <h2 className='header'>We here welcome u to our &nbsp;<span>Sneaker</span>&nbsp; showroom</h2>
      <div className="Category">
        <div style={{ display: 'flex', justifyContent: 'space-around', cursor: 'pointer' }}>
          <Link to="/collection/shoes" style={{ color: 'black', textDecoration: 'none', fontSize: '30px' }}>Shoes</Link>
          <Link to="/collection/sneakers" style={{ color: 'black', textDecoration: 'none', fontSize: '30px' }}>Sneakers</Link>
          <Link to="/collection/slippers" style={{ color: 'black', textDecoration: 'none', fontSize: '30px' }}>Slippers</Link>

<<<<<<< HEAD
    <div className="Category">
      <div>
        <h2 >Shoes</h2>
        <h2 >Sneakers</h2>
        <h2 >Slippers</h2>
      </div>
    <Shoes />
    <Sneakers />
    <Slippers />
    </div>
=======
        </div>
        <Routes>
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/sneakers' element={<Sneakers />} />
          <Route path='/slippers' element={<Slippers />} />
        </Routes>
        {/* {<Shoes />} */}
        {/* {<Sneakers />} */}
        {/* {<Slippers />} */}
      </div>
>>>>>>> 0700fe45148328a709db74806f8cfb6277657b77

    </>
  )
}

export default Collection

