import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'

import projectReducer from './slices/projectSlice'
// ...import all other slices

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // ← add this
    projects: projectReducer,  // ← add this
    // ...all other slices
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch