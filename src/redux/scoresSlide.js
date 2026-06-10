import { createSlice } from '@reduxjs/toolkit';

const scoresSlide = createSlice({
    name: 'toast',
    initialState: {
        statistics: {},
        topGroupA: {},
        topGroupA1: {},
        topGroupB: {},
        topGroupC: {},
        topGroupD: {},
        type: "Group A"

    },
    reducers: {
        setSatistics: (state, action) => {
            const data = action.payload || {}
            state.statistics = data;
        },
        setTopGroupA: (state, action) => {
            const data = action.payload || {}
            state.topGroupA = data;
        },
        setTopGroupA1: (state, action) => {
            const data = action.payload || {}
            state.topGroupA1 = data;
        },
        setTopGroupB: (state, action) => {
            const data = action.payload || {}
            state.topGroupB = data;
        },
        setTopGroupC: (state, action) => {
            const data = action.payload || {}
            state.topGroupC = data;
        },
        setTopGroupD: (state, action) => {
            const data = action.payload || {}
            state.topGroupD = data;
        },
        setType: (state, action) => {
            const data = action.payload || {}
            state.type = data;
        },
    },
});

export const { setSatistics, setTopGroupA, setTopGroupA1, setTopGroupB, setTopGroupC, setTopGroupD, setType } = scoresSlide.actions;

export default scoresSlide.reducer;