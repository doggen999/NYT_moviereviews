import { combineReducers } from 'redux'

import {MOVIES_IS_LOADING, SEARCH_IN_PROGRESS,ITEMS_FETCH_DATA_SUCCESS} from './constants'

const initialState = {
  movies: [],
  moviesIsLoading: false,
  isSearching: false
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return {...state, movies: action.movies}
    case MOVIES_IS_LOADING:
      return {...state, isLoading: action.isLoading}
    case SEARCH_IN_PROGRESS:
      return {...state, isSearching: action.isSearching}
    default:
      return state
  }
}

export default combineReducers({
  moviesReducer
})
