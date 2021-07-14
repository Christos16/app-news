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
  openModal: false,
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
    saveMe: (state, { payload }) => {
      state.me = payload.me
    },
    handleModal: (state, { payload }) => {
      state.openModal = payload.openModal
    },
  },
})

export const { action } = appSlice
export const { authenticate, saveMe, handleModal, getTopHeadlines } = appSlice.actions

export default appSlice.reducer
