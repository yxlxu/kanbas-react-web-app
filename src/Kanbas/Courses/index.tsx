import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import * as client from "./client";
import { useEffect, useState } from "react";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const fetchUsers = async () => {
    try {
      const users = await client.findUsersForCourse(cid || "");
      setUsers(users);
    } catch (error) {
      console.log("find users for course failed: ", error, "for course", cid);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/new" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={users}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
