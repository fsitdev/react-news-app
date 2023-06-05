import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@/lib/axios'

// Async action to fetch news data
export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (data = {}) => {
        const { type, ...params } = data
        const response = await axios.get(
            `/api/${type === 'search' ? 'search' : 'news'}`,
            { params },
        )
        return response.data
    },
)

// News slice
const newsSlice = createSlice({
    name: 'news',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNews.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export default newsSlice.reducer
