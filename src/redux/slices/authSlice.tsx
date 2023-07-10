import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import auth from "../initialState/auth";
export const authSlice = createSlice({
  name: "auth",
  initialState: auth,
  reducers: {
    updateUserFromToken: (
      state,
      payload: PayloadAction<{
        payload: string;
        refresh: string;
      }>
    ) => {
      //   let decoded_token = jwt_decode(payload.payload);
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getaccessGraphql.fulfilled, (state, action) => {
    //   const data = action.payload.data.data;
    //   state.access_graphql = data;
    // });
  },
});

// Export actions
const { updateUserFromToken } = authSlice.actions;

export default authSlice.reducer;
