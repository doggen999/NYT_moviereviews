import {MOVIES_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS, MOVIES_HAS_ERRORED, SEARCH_IN_PROGRESS, ENDPOINT} from './constants'

const moviesFetchHasErrored = errored => {
  return {
    type: MOVIES_HAS_ERRORED,
    errored
  }
}

const movieSearchInProgress = isSearching => {
  return {
    type: SEARCH_IN_PROGRESS,
    isSearching
  }
}

export const movieDataIsLoading = isLoading => {
  return {
    type: MOVIES_IS_LOADING,
    isLoading
  }
}

export const fetchMovieData = () => {
  return (dispatch) => {
    dispatch(movieDataIsLoading(true))

    fetch(ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          dispatch(moviesFetchHasErrored(true))
          throw Error(response.statusText)
        }
        dispatch(movieDataIsLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((moviedata) => {
        dispatch(moviesFetchDataSuccess(moviedata.results))
      })
      .catch(() => dispatch(moviesFetchHasErrored(true)))
  }
}

export const searchMovie = query => {
  return (dispatch) => {
    dispatch(movieSearchInProgress(true))

    fetch(ENDPOINT + '&query=' + query)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(movieSearchInProgress(false))
        return response
      })
      .then((response) => response.json())
      .then((movie) => dispatch(moviesFetchDataSuccess(movie.results)))
      .catch(() => dispatch(moviesFetchHasErrored(true)))
  }
}

export const moviesFetchDataSuccess = movies => {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS, movies
  }
}