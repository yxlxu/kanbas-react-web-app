export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="mb-2">Assignment Name</label>
      <div className="col-sm-7">
        <input id="wd-name" value="A1" className="form-control" />
      </div>
      <br />
      <div className="col-sm-7">
        <textarea
          cols={40}
          rows={10}
          id="wd-description"
          className="form-control"
        >
          The assignment is available online Submit a link to the landing page
          of The assignment is available online Submit a link to the landing
          page of The assignment is available online Submit a link to the
          landing page of The assignment is available online Submit a link to
          the landing page of The assignment is available online Submit a link
          to the landing page of The assignment is available online Submit a
          link to the landing page of
        </textarea>
      </div>
      <br />

      <div className="mb-3 form-inline row">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-5">
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      <div className="mb-3 form-inline row">
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
      </div>

      <div className="mb-3 form-inline row">
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
      </div>

      <div className="mb-3 row">
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
      </div>

      <div className="mb-3 form-inline row">
        <label htmlFor="wd-assign" className="col-sm-2 col-form-label text-end">
          Assign
        </label>
        <div className="col-sm-5">
          <div className="form-control">
            <div>
              <label htmlFor="wd-assign">Assign to </label>
            </div>
            <input id="wd-assign" value="Everyone" className="form-control" />
            <br />
            <div>
              <label htmlFor="wd-due">Due </label>
            </div>
            <input
              type="date"
              id="wd-due"
              value="2024-05-13"
              className="form-control"
            />
            <br />
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="wd-afrom">Available from</label>
                <input
                  type="date"
                  id="wd-afrom"
                  value="2024-05-13"
                  className="form-control"
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="wd-auntil">Until</label>
                <input
                  type="date"
                  id="wd-auntil"
                  value="2024-05-13"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 col-sm-7"/>
      <div className="float-end col-sm-7">
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>{" "}
        <button type="button" className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
