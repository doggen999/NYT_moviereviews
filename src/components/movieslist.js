import React from 'react'

import { connect } from 'react-redux'

import Movie from './movie'

class MoviesList extends React.Component {
  render () {
    const { movies, isLoading, isSearching } = this.props
    return (
      <div>
        {isLoading ? <div><br />Loading...</div> : isSearching ? <div><br/>Searching...</div> : <ul>
          {movies.map((movie, index) => {
            return (
              <Movie
                data-id={index}
                key={index}
                {...movie} />
            )
          })}
        </ul>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.movies,
    isLoading: state.moviesReducer.isLoading,
    isSearching: state.moviesReducer.isSearching
  }
}

export default connect(mapStateToProps)(MoviesList)
