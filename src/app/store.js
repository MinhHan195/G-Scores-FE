import { configureStore } from '@reduxjs/toolkit';
import scoresSlide from '../redux/scoresSlide'

export const store = configureStore({
    reducer: {
        score: scoresSlide
    },
}); 