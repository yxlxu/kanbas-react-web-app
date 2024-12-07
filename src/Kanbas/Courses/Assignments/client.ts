import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Delete an assignment by ID
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

// Update an assignment
export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};

// Fetch all assignments
export const fetchAllAssignments = async () => {
  const { data } = await axiosWithCredentials.get(ASSIGNMENTS_API);
  return data;
};

// Fetch assignments by course ID
export const fetchAssignmentsByCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/course/${courseId}`);
  return data;
};

// Fetch a specific assignment by ID
export const fetchAssignmentById = async (assignmentId: string) => {
  const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};

// Create a new assignment
export const createAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
  return data;
};
