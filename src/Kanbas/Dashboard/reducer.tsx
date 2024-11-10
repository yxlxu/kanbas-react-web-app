import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleEnrollment: (state, { payload: { userId, courseId } }) => {
      const index = state.enrollments.findIndex(
        (e) => e.user === userId && e.course === courseId
      );
      if (index > -1) {
        console.log("Unenrolling user:", userId, "from course:", courseId);
        // Unenroll: Remove from enrollments
        state.enrollments.splice(index, 1);
      } else {
        // Enroll: Add to enrollments
        state.enrollments.push({
          _id: new Date().getTime().toString(),
          user: userId,
          course: courseId,
        });
      }
    },
    loadEnrollments: (state, { payload }) => {
      state.enrollments = payload;
    },
  },
});

export const { toggleEnrollment, loadEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
