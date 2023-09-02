import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupModalOpen: false,
  loginModalOpen: false,
  commentModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.signupModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.signupModalOpen = false;
    },
    openLoginModal: (state) => {
      state.loginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.loginModalOpen = false;
    },
    openCommentModal: (state) => {
      state.commentModalOpen = true;
    },
    closeCommentModal: (state) => {
      state.commentModalOpen = false;
    },
  },
});

export const {
  openCommentModal,
  closeCommentModal,
  closeSignupModal,
  openSignupModal,
  openLoginModal,
  closeLoginModal,
} = modalSlice.actions;

export default modalSlice.reducer;
