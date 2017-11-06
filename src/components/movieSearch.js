import React from 'react'

const MovieSearch = ({onSearchClick}) => {
  let searchInput
  return (
    <div>
      <input ref={input => { searchInput = input }} />

      <button onClick={() => { onSearchClick(searchInput.value) }}>Search for movie</button>
    </div>
  )
}

export default MovieSearch
