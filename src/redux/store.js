import { configureStore } from '@reduxjs/toolkit'
import markdownTextSlice from './markdownTextSlice';

export const store = configureStore({
    reducer: {
        markdownText: markdownTextSlice,
    },
});
