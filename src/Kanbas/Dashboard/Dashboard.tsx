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
  onfetchCourses,
  enrolling, 
  setEnrolling,
  updateEnrollment 
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  onfetchCourses: () => void;
  enrolling: boolean; 
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void 
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [isStudent, setIsStudent] = useState(false);

  const isFaculty = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  // const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  // const dispatch = useDispatch();

  // const fetchEnrollments = async () => {
  //   try {
  //     const response = await enrollmentClient.fetchEnrollments(currentUser._id);
  //     console.log(response);
  //     dispatch(setEnrollment(response));
  //   } catch (error) {
  //     console.error("Failed to fetch enrollments:", error);
  //   }
  // };

  useEffect(() => {
    // fetchEnrollments();
    if (currentUser?.role === "STUDENT") {
      setIsStudent(true);
    }
  }, [currentUser]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          className="btn btn-primary float-end mt-1"
          onClick={() => setEnrolling(!enrolling)}
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />
      
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
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => {
            // const isEnrolled = enrollments.some(
            //   (enrollment: any) =>
            //     enrollment.user === currentUser._id &&
            //     enrollment.course === course._id
            // );
            const getLinkTo = () => {
              if (isStudent) {
                return course.enrolled
                  ? `/Kanbas/Courses/${course._id}/Home`
                  : `/Kanbas/Dashboard/`;
              }
              return `/Kanbas/Courses/${course._id}/Home`;
            };
            return (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={getLinkTo()}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src={img} width="100%" height={160} />
                  </Link>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button  
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
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
                          to={getLinkTo()}
                          className="wd-dashboard-course-link text-decoration-none text-dark"
                        >
                          <button className="btn btn-primary"> Go </button>
                        </Link>
                      </div>
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
