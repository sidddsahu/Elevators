import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'

import projectReducer from './slices/projectSlice'
// import contactReducer from '../store/slices/contactSlice'

// ...import all other slices

export const store = configureStore({
  reducer: {
    ui: uiReducer,

    projects: projectReducer,
    // contact:contactReducer


  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch