import React from 'react'
import './Try.css'
import Konva from './Konva';
import Navbar from './Navbar';
import TryA from './TryA';

function Try() {
  return (
    <div>
      <Navbar/>
      <h1 className='heading'>
        Lets make you Your Own Story
      </h1>
      <div className='bg-c'></div>
      <div className='bg-cc'></div>

      {/* Was trying to add cool gifs lol */}
      {/* <div className='column'>
        <img  className='gif' src={myGif} alt="imagination-gif"/>
        <li>
          <ol>
            <h3>To start</h3>
          </ol>
        </li>
      </div> */}

      {/* Adding konva canvas */}
      <Konva/>
      
      
    </div>
  )
}

export default Try;