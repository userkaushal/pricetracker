import React from 'react'
import "../components/Trending.css";
import Cards from './Cards';

function Trending() {

  return (
    <div>
        <div className='Trending mt-5'>
            <h2 style={{textAlign:"left", marginBottom:"30px"}}>Trending Products</h2>
            <Cards/>
        </div>

    </div>
  )
}

export default Trending