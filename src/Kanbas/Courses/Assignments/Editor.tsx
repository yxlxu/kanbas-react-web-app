import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

  // Local state for form fields
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    course: cid || "",
    points: 0,
    releaseDate: new Date().toISOString(),
    dueDate: new Date().toISOString(),
    availableUntilDate: new Date().toISOString(),
  });

  const fetchAssignment = async () => {
    const existingAssignment = await assignmentsClient.fetchAssignmentById(aid as string);
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }

  useEffect(() => {
    if (aid !== "Editor") {
      // Edit mode: Load existing assignment data
      fetchAssignment()
    }
  }, [aid, assignments]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  // Save the assignment (add or update)
  const handleSave = async () => {
    if (aid !== "Editor") {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    } else {
      await assignmentsClient.createAssignment(assignment);
      dispatch(addAssignment(assignment));
    }
    console.log([...assignments, assignment])
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  // Cancel and navigate back
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };
  
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="mb-2">Assignment Name</label>
      <div className="col-sm-7">
        <input 
          name="title"
          id="wd-name" 
          value={assignment.title} 
          className="form-control" 
          onChange={handleChange} 
          readOnly={!isFaculty}
        />
      </div>
      <br />
      <div className="col-sm-7">
        <textarea
          name="description"
          cols={40}
          rows={10}
          id="wd-description"
          className="form-control"
          value={assignment.description}
          onChange={handleChange}
          readOnly={!isFaculty}
        ></textarea>
      </div>
      <br />

      <div className="mb-3 form-inline row">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-5">
          <input 
            name="points"
            id="wd-points" 
            value={assignment.points} 
            className="form-control" 
            onChange={handleChange}
            readOnly={!isFaculty}
          />
        </div>
      </div>

      {/* <div className="mb-3 form-inline row">
        <label htmlFor="wd-ag" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-5">
          <select id="wd-ag" className="form-select">
            <option value="ASSIGNMENT" selected>
              ASSIGNMENTS
            </option>
            <option value="EXAM">EXAM</option>
          </select>
        </div>
      </div> */}

      {/* <div className="mb-3 form-inline row">
        <label htmlFor="wd-grade" className="col-sm-2 col-form-label text-end">
          Display Grade as
        </label>
        <div className="col-sm-5">
          <select id="wd-grade" className="form-select">
            <option value="PERCENTAGE" selected>
              Percentage
            </option>
            <option value="LETTER">Letter</option>
          </select>
        </div>
      </div> */}

      {/* <div className="mb-3 row">
        <label
          htmlFor="wd-subtype"
          className="col-sm-2 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-5">
          <div className="form-control">
            <br />
            <select id="wd-subtype" className="form-select">
              <option value="ONLINE" selected>
                Online
              </option>
              <option value="INPERSON">In-person</option>
            </select>
            <br />
            <strong className="my-20">Online Entry Options</strong>
            <br />

            <input
              type="checkbox"
              name="check-entry"
              id="wd-chkbox-text"
              className="form-check-input"
            />
            <label htmlFor="wd-chkbox-text" className="ms-2">
              Text Entry
            </label>
            <br />

            <input
              type="checkbox"
              name="check-entry"
              id="wd-chkbox-url"
              className="form-check-input"
            />
            <label htmlFor="wd-chkbox-url" className="ms-2">
              Website URL
            </label>
            <br />

            <input
              type="checkbox"
              name="check-entry"
              id="wd-chkbox-media"
              className="form-check-input"
            />
            <label htmlFor="wd-chkbox-media" className="ms-2">
              Media Recordings
            </label>
            <br />

            <input
              type="checkbox"
              name="check-entry"
              id="wd-chkbox-annotation"
              className="form-check-input"
            />
            <label htmlFor="wd-chkbox-annotation" className="ms-2">
              Student Annotation
            </label>
            <br />

            <input
              type="checkbox"
              name="check-entry"
              id="wd-chkbox-file"
              className="form-check-input"
            />
            <label htmlFor="wd-chkbox-file" className="ms-2">
              File Uploads
            </label>
            <br />
            <br />
          </div>
        </div>
      </div> */}

      <div className="mb-3 form-inline row">
        <label htmlFor="wd-assign" className="col-sm-2 col-form-label text-end">
          Assign
        </label>
        <div className="col-sm-5">
          <div className="form-control">
            {/* <div>
              <label htmlFor="wd-assign"><strong>Assign to</strong></label>
            </div>
            <input id="wd-assign" value="Everyone" className="form-control" />
            <br /> */}
            <div>
              <label htmlFor="wd-due"><strong>Due</strong></label>
            </div>
            <input
              name="dueDate"
              type="date"
              id="wd-due"
              value={new Date(assignment.dueDate).toISOString().split("T")[0]}
              className="form-control"
              onChange={handleChange}
              readOnly={!isFaculty}
            />
            <br />
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="wd-afrom"><strong>Available from</strong></label>
                <input
                  name="releaseDate"
                  type="date"
                  id="wd-afrom"
                  value={new Date(assignment.releaseDate).toISOString().split("T")[0]}
                  className="form-control"
                  onChange={handleChange}
                  readOnly={!isFaculty}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="wd-auntil"><strong>Until</strong></label>
                <input
                  name="availableUntilDate"
                  type="date"
                  id="wd-auntil"
                  value={new Date(assignment.availableUntilDate).toISOString().split("T")[0]}
                  className="form-control"
                  onChange={handleChange}
                  readOnly={!isFaculty}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 col-sm-7"/>
      {isFaculty &&
        <div className="float-end col-sm-7">
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>{" "}
          <button 
              type="button" 
              className="btn btn-danger"
              onClick={handleSave}
          >
            Save
          </button>
        </div>
      }
    </div>
  );
}
