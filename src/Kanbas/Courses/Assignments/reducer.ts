import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};
const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      console.log("hi ",assignment)
      console.log("hello", state.assignments)
      const newModule: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title, 
        description: assignment.description,
        course: assignment.course,
        releaseDate: assignment.releaseDate,
        dueDate: assignment.dueDate,
        availableUntilDate: assignment.availableUntilDate,
        points: assignment.points
      };
      state.assignments = [...state.assignments, newModule] as any;
      console.log(state.assignments)
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      console.log("update")
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
assignmentSlice.actions;
export default assignmentSlice.reducer;