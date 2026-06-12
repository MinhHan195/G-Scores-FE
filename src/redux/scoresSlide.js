import { createSlice } from '@reduxjs/toolkit';

const scoresSlide = createSlice({
    name: 'scores',
    initialState: {
        detailScores: {},
        statistics: {},
        topGroupA: {},
        topGroupA1: {},
        topGroupB: {},
        topGroupC: {},
        topGroupD: {},
        type: "Group A",
        searchString: ''

    },
    reducers: {
        setDetailScores: (state, action) => {
            const data = action.payload || {}
            state.detailScores = data;
        },
        setSatistics: (state, action) => {
            const data = action.payload || {}
            state.statistics = data;
        },
        setTopGroup: (state, action) => {
            const data = action.payload || {}
            state.topGroupA = data['group_a'];
            state.topGroupA1 = data['group_a1'];
            state.topGroupB = data['group_b'];
            state.topGroupC = data['group_c'];
            state.topGroupD = data['group_d'];
        },
        setType: (state, action) => {
            const data = action.payload || {}
            state.type = data;
        },
        setSearchString: (state, action) => {
            const data = action.payload || {}
            state.searchString = data
        }
    },
});

export const { setDetailScores, setSatistics, setTopGroup, setType, setSearchString } = scoresSlide.actions;

export default scoresSlide.reducer;