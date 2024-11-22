import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollment: (state, action) => {
      state.enrollments = action.payload;
    }
  },
});

export const { setEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
