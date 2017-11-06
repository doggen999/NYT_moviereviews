import React from 'react'
import { connect } from 'react-redux'

import { fetchMovieData, searchMovie } from './actions'

import MoviesList from './components/movieslist'
import MovieSearch from './components/movieSearch'

class App extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    const { searchMovie } = this.props
    return (
      <div>
        <MovieSearch onSearchClick={searchMovie} />
        <MoviesList />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchMovieData()),
    searchMovie: query => dispatch(searchMovie(query))
  }
}

export default connect(null, mapDispatchToProps)(App)
