import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      console.log(courses)
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);

      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      console.log("unenroll");
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    ); 
  }

  useEffect(() => {
    if (enrolling) {
      console.log("show all courses")
      fetchCourses();
    } else {
      console.log("show my courses")
      findCoursesForUser();
  }
 }, [currentUser, enrolling]);

  const [course, setCourse] = useState<any>({
    name: "New Course",
    // number: "New Number",
    // startDate: "2023-09-10",
    // endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Session>
    <div id="wd-kanbas">
      <table width="100%">
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <div className="wd-main-content-offset p-3">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route
                  path="/Dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        onfetchCourses={fetchCourses}
                        enrolling={enrolling} 
                        setEnrolling={setEnrolling}
                        updateEnrollment={updateEnrollment}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Courses/:cid/*"
                  element={
                    <ProtectedRoute>
                      <Courses courses={courses} />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </td>
        </tr>
      </table>
    </div>
    </Session>
  );
}
