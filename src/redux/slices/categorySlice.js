// Like service, define all method process logic call api

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/instance";

export const getAllCategies = createAsyncThunk("categories/getAll", async () => {
    let response = await instance.get("admin/categories");
    console.log(response.data.data);
    return response.data;
});

const initialState = {
    data: [],
    isLoading: false,
    message: ""
}

const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategies.pending, (state, action) => {
                // không cần phải return về 1 state mới mà chỉ cần cập nhật giá trị các thuộc tính
                // đang gọi api
                state.isLoading = true;
                console.log("action", action)
            })
            .addCase(getAllCategies.fulfilled, (state, action) => {
                // call api thành công
                console.log("action", action)
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllCategies.rejected, (state, action) => {
                // call thát bại
                console.log("action", action)
                state.isLoading = false;
            })
    }
});

export default categorySlice.reducer;