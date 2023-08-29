import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signupModalOpen:false

}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
        state.signupModalOpen = true
    },
    closeSignupModal: (state) => {
        state.signupModalOpen = true
    },
  }
});

export const {closeSignupModal,openSignupModal} = modalSlice.actions

export default modalSlice.reducer