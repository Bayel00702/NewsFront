import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    success: false,
    error: null,
};

const imageResetSlice = createSlice({
    name: 'uploadReset',
    initialState,
    reducers: {},
});

export default imageResetSlice.reducer;