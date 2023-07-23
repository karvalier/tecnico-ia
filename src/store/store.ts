import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './sidebar.state';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer, // Utiliza el reducer del slice
  },
});

export default store;