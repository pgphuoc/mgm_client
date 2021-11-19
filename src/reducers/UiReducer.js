import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowMenu: true,
  loading: false,
  modal: {
    isDisplay: false,
    title: '',
    data: {},
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    menuToggle: (state) => {
      state.isShowMenu = !state.isShowMenu;
    },

    loadingToggle: (state) => {
      state.loading = !state.loading;
    },

    showModal: (state, action) => {
      state.modal.isDisplay = true;
      state.modal.title = action.payload.title;
    },

    showModalWithData: (state, action) => {
      state.modal.isDisplay = true;
      state.modal.title = action.payload.title;
      state.modal.data = action.payload.data;
    },

    hideModal: (state) => {
      state.modal = {
        isDisplay: false,
        title: '',
        data: {},
      };
    },
  },
});

// Actions
export const uiAction = uiSlice.actions;

// Selectors
export const uiSelector = (state) => state.ui;

// Reducer
export default uiSlice.reducer;
