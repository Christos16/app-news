/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  checked: false,
  loggedIn: false,
  loading: false,
  topHeadlines: [],
  queryArticles: [],
  search: "",
  openModal: false,
  openWebView: false,
  me: {},
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
      state.checked = payload.checked
    },
    getTopHeadlines: (state, { payload }) => {
      state.topHeadlines = payload.topHeadlines
    },
    handleSearch: (state, { payload }) => {
      state.search = payload.search
    },
    saveMe: (state, { payload }) => {
      state.me = payload.me
    },
    getArticleBySearch: (state, { payload }) => {
      state.queryArticles = payload.queryArticles
    },
    handleModal: (state, { payload }) => {
      state.openModal = payload.openModal
    },
    handleOpenWebView: (state, { payload }) => {
      state.openWebView = payload.openWebView
    },
 
  
  },
})

export const { action } = appSlice
export const { authenticate, saveMe, handleModal, getArticleBySearch, handleOpenWebView, getTopHeadlines, handleSearch } = appSlice.actions

export default appSlice.reducer
