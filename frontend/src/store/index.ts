import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'


import projectReducer from './slices/projectSlice'


export const store = configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch