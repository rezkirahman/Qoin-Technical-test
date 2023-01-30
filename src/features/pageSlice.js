import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'counter',
    initialState: {
        page: 1,
    },
    reducers: {
        first: (state) => {
            state.page = 1
        },
        last: (state, action) => {
            state.page = action.payload
        },
        next: (state, action) => {
            if (state.page == action.payload) {
                state.page = action.payload
            }
            else {
                state.page += 1
            }
        },
        prev: (state) => {
            if (state.page == 1) {
                state.page = 1
            } else {
                state.page -= 1
            }
        },
        numberpage: (state, action) => {
            state.page = action.payload
        }
    },
})

export const { first, last, next, prev,numberpage } = pageSlice.actions

export default pageSlice.reducer