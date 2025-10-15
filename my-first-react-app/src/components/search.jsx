import React from 'react'

const search = (searchTerm,setSearchTerm) => {
  return (
  <div className='search'>
    <div>
      <img src="Search.svg" alt="search" />
      <input type="text"
      placeholder='Search through thousands of movies'
      value={searchTerm} />
    </div>
  </div>
  )
}

export default search
