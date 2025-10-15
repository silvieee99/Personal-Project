import React, { useState } from 'react'
import search from './components/search'

const App = () => {
  const[searchTerm,setSearchTerm]=useState('I AM BATMAN');
  return (
    <main className='bg-black'>
      <div className='Pattern'/>
      <div className='Wrapper'>
        <header>
          <img src="./hero-img.png" alt="" srcset="" />
          <h1>Find <span className='text-gradient'>movies</span> you'll enjoy without the hassle</h1>
        </header>
        <search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        

      </div>
    </main>
  )
}

export default App