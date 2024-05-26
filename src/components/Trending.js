import React from 'react'
import "../components/Trending.css";
import Cards from './Cards';

function Trending() {

  return (
    <div>
        <div className='Trending'>
            <h2 style={{textAlign:"left"}}>Trending Products</h2>
            <Cards/>
        </div>

    </div>
  )
}

export default Trending