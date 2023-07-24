import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './sidebar.state';
import chatState from './chat.state';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer, 
    chats: chatState.reducer
  },
});

export type StoreType = ReturnType<typeof store.getState>;