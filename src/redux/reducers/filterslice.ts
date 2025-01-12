import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobType: '',
    workExp: '',
    location: '',
    salaryType: '',
    salaryRange: 1000,
};

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setJobType: (state, action) => {
            state.jobType = action.payload;
        },
        setWorkExp: (state, action) => {
            state.workExp = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setSalaryType: (state, action) => {
            state.salaryType = action.payload;
        },
        setSalaryRange: (state, action) => {
            state.salaryRange = action.payload;
        },
        resetFilters: () => initialState,
    },
});

export const {
    setJobType,
    setWorkExp,
    setLocation,
    setSalaryType,
    setSalaryRange,
    resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
