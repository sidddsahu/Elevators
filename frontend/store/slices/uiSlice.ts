// src/store/slices/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UIState } from '@/types'

const initialState: UIState = {
  mobileMenuOpen: false,
  activePage: 'home',
  scrollProgress: 0,
  toastMessage: null,
  toastVisible: false,
  activeFilter: 'all',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    setScrollProgress(state, action: PayloadAction<number>) {
      state.scrollProgress = action.payload
    },
    showToast(state, action: PayloadAction<string>) {
      state.toastMessage = action.payload
      state.toastVisible = true
    },
    hideToast(state) {
      state.toastVisible = false
      state.toastMessage = null
    },
    setActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilter = action.payload
    },
  },
})

export const {
  setMobileMenuOpen,
  toggleMobileMenu,
  setScrollProgress,
  showToast,
  hideToast,
  setActiveFilter,
} = uiSlice.actions

export default uiSlice.reducer
