import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../images/5610.jpg";
import { setEnrollment } from "./reducer"; // Import enrollment actions
import * as courseClient from "../Courses/client";
import * as enrollmentClient from "./client";
//citation: copied from https://stackoverflow.com/questions/20033712/html-img-src-wont-load-my-images

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  onfetchCourses
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  onfetchCourses: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const isStudent = currentUser?.role === "STUDENT";
  const isFaculty = currentUser?.role === "FACULTY";

  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const fetchAllCourses = async () => {
    const courses = await courseClient.fetchAllCourses();
    setAllCourses(courses);
  }

  const fetchEnrollments = async () => {
    try {
      const response = await enrollmentClient.fetchEnrollments(currentUser._id);
      dispatch(setEnrollment(response));
    } catch (error) {
      console.error("Failed to fetch enrollments:", error);
    }
  };

  const filteredCourses = showAllCourses ? allCourses : courses;

  useEffect(() => {
    fetchAllCourses();
    fetchEnrollments();
  }, []);

  const handleToggleEnrollment = async (courseId: string) => {
    try {
      if (enrollments.some((e: any) => e.user === currentUser._id && e.course === courseId)) {
        await enrollmentClient.unenrollFromCourse(currentUser._id, courseId);
      } else {
        await enrollmentClient.enrollInCourse(currentUser._id, courseId);
      }
      fetchEnrollments(); // Refresh enrollments
      onfetchCourses();
    } catch (error) {
      console.error("Failed to toggle enrollment:", error);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isStudent && (
        <button
          className="btn btn-primary float-end mt-1"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </button>
      )}
      {isFaculty && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            );
            return (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={
                      isEnrolled
                        ? `/Kanbas/Courses/${course._id}/Home`
                        : `/Kanbas/Dashboard/`
                    }
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src={img} width="100%" height={160} />
                  </Link>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <div className="d-flex flex-row flex-nowrap gap-1 justify-content-between align-items-center">
                      <div className="d-flex gap-2">
                        <Link
                          to={
                            isEnrolled
                              ? `/Kanbas/Courses/${course._id}/Home`
                              : `/Kanbas/Dashboard/`
                          }
                          className="wd-dashboard-course-link text-decoration-none text-dark"
                        >
                          <button className="btn btn-primary"> Go </button>
                        </Link>
                      </div>
                      {isStudent && (
                        <div className="d-flex gap-2">
                          <button
                            onClick={() => handleToggleEnrollment(course._id)}
                            className={`btn ${
                              isEnrolled ? "btn-danger" : "btn-success"
                            }`}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </button>
                        </div>
                      )}
                      {isFaculty && (
                        <div className="d-flex gap-2">
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>{" "}
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
