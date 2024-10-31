import ModulesControls from "../Modules/ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentHeader from "./AssignmentHeader";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((obj) => obj.course === cid);

  const formatTime = (date: string) => {
    let time = "";
    time = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    time = time + " at ";
    time = time + (new Date(date).getHours() % 12 || 12) + ":";
    time = time + new Date(date).getMinutes().toString().padStart(2, "0");
    time = time + (new Date(date).getHours() >= 12 ? "pm" : "am");
    return time;
  };

  return (
    <div id="wd-assignments">
      <AssignmentHeader />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ul
            id="wd-assignment-list"
            className="wd-lessons list-group rounded-0"
          >
            {assignments.map((assignment) => (
              <li className="wd-lesson list-group-item p-3 ps-1 d-inline-flex flex-shrink-1">
                <BsGripVertical className="me-2 fs-4 my-auto" />
                <BsNewspaper
                  className="me-2 fs-4 my-auto"
                  style={{ color: "green" }}
                />
                <div className="flex flex-fill ml-10">
                  <Link
                    className="wd-assignment-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    <h5>
                      {assignment._id} - {assignment.title}
                    </h5>
                  </Link>
                  <h6>
                    <span style={{ color: "red" }}>Multiple Modules</span> |
                    <strong> Not available until </strong>
                    {formatTime(assignment.releaseDate)} |<strong> Due </strong>
                    {formatTime(assignment.dueDate)} | {assignment.points}pts
                  </h6>
                </div>
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
