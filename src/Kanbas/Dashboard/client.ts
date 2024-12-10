import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// Fetch all enrollments for a specific user
export const fetchEnrollments = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${userId}`);
  return response.data;
};

// Enroll a user in a course
export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.put(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return response.data;
};

// Unenroll a user from a course
// export const unenrollFromCourse = async (userId: string, courseId: string) => {
//   const response = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
//   return response.data;
// };
