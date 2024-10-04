import ModulesControls from "../../Modules/ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";
import LessonControlButtons from "../../Modules/LessonControlButtons";
import AssignmentHeader from "./AssignmentHeader";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentHeader/>
      <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS  
            <AssignmentControlButtons />
          </div>
          <ul id="wd-assignment-list" className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-inline-flex flex-shrink-1">
              <BsGripVertical className="me-2 fs-4 my-auto" />
              <BsNewspaper className="me-2 fs-4 my-auto" style={{color: "green"}}/>
              <div className="flex flex-fill ml-10">
                <a
                  className="wd-assignment-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <h5>A1 - ENV + HTML</h5>
                </a>
                <h6>
                  <span style={{color: "red"}}>Multiple Modules</span> | 
                  <strong> Not available until </strong> 
                  May 6 at 12:00 am | 
                  <strong> Due </strong>
                  May 13 at 11:59pm | 100pts
                </h6>
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-inline-flex flex-shrink-1">
              <BsGripVertical className="me-2 fs-4 my-auto" />
              <BsNewspaper className="me-2 fs-4 my-auto" style={{color: "green"}}/>
              <div className="flex flex-fill ml-2">
                <a
                  className="wd-assignment-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <h5>A2 - CSS + BOOTSTRAP</h5>
                </a>
                <h6>
                  <span style={{color: "red"}}>Multiple Modules</span> | 
                  <strong> Not available until </strong> 
                  May 6 at 12:00 am | 
                  <strong> Due </strong>
                  May 13 at 11:59pm | 100pts
                </h6>
              </div>
              <LessonControlButtons/>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-inline-flex flex-shrink-1">
              <BsGripVertical className="me-2 fs-4 my-auto" />
              <BsNewspaper className="me-2 fs-4 my-auto" style={{color: "green"}}/>
              <div className="flex flex-fill ml-10">
                <a
                  className="wd-assignment-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <h5>A3 - JAVASCRIPT + REACT</h5>
                </a>
                <h6>
                  <span style={{color: "red"}}>Multiple Modules</span> | 
                  <strong> Not available until </strong> 
                  May 6 at 12:00 am | 
                  <strong> Due </strong>
                  May 13 at 11:59pm | 100pts
                </h6>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
