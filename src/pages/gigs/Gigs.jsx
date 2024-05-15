import React, { useState } from 'react'
import "./Gigs.css"; 
import {gigs} from "../../data"; 
import GigCard from "../../components/gigCard/gigCard"

const Gigs = () => {

  const [open, setOpen] = useState(false); 
  const [sort, setSort] = useState("sales");


  const reSort =(type) => {
    setSort(type); 
    setOpen(false)

  }




  return (
    <div className="gigs">
      <div className="container">
        <div className="breadcrumbs">FIVERR > GRAPHICS & DESIGN >
        <h1>AI Artist</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, consequuntur!</p>
        </div>

        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type='text' placeholder='min' />
            <input type='text' placeholder='min' />
            <button>Apply</button>
          </div>

          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>
              {sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src='./img/down.png' onClick={ () => setOpen(!open)} />

            {open && (
                  <div className="rightMenu">
                  <span onClick={ () => reSort("createdAt")}>Newest</span>
                  <span onClick={ () => reSort("sales")}>Best Selling</span>
                </div>
            )}

          </div>
        </div>

        <div className="cards">
          {gigs.map( gig => (
            <GigCard key={gig.id} item={gig}/>
          ))} 
        </div>
      </div>
    </div>

  )
}

export default Gigs
