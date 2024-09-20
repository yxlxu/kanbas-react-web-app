export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div><label htmlFor="wd-name">Assignment Name</label></div>
      <br />
      <div><input id="wd-name" value="A1 - ENV + HTML" /></div>
      <br />
      <div>
        <textarea cols={40} rows={10} id="wd-description">
          The assignment is available online 
          Submit a link to the landing page of
          The assignment is available online 
          Submit a link to the landing page of The assignment is available online 
          Submit a link to the landing page of The assignment is available online 
          Submit a link to the landing page of The assignment is available online 
          Submit a link to the landing page of The assignment is available online 
          Submit a link to the landing page of
        </textarea>
      </div>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-ag">Assignment Group</label>
          </td>
          <td>
            <select id="wd-ag">
              <option value="ASSIGNMENT" selected>ASSIGNMENTS</option>
              <option value="EXAM">EXAM</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-grade">Display Grade as</label>
          </td>
          <td>
            <select id="wd-grade">
              <option value="ONLINE" selected>Percentage</option>
              <option value="LETTER">Letter</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-subtype">Submission Type</label>
          </td>
          <td>
            <select id="wd-subtype">
              <option value="ONLINE" selected>Online</option>
              <option value="INPERSON">In-person</option>
            </select>
            <br/><br/>
            <label>Online Entry Options</label><br/>

            <input type="checkbox" name="check-entry" id="wd-chkbox-text"/>
            <label htmlFor="wd-chkbox-text">Text Entry</label><br/>

            <input type="checkbox" name="check-entry" id="wd-chkbox-url"/>
            <label htmlFor="wd-chkbox-url">Website URL</label><br/>

            <input type="checkbox" name="check-entry" id="wd-chkbox-media"/>
            <label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

            <input type="checkbox" name="check-entry" id="wd-chkbox-annotation"/>
            <label htmlFor="wd-chkbox-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="check-entry" id="wd-chkbox-file"/>
            <label htmlFor="wd-chkbox-file">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td>
            <div>
              <div>
                <label htmlFor="wd-assign">Assign to </label>
              </div>
              <input id="wd-assign" value="Everyone" />
            </div>
            <br />
            <div>
              <div>
                <label htmlFor="wd-due">Due </label>
              </div>
              <input type="date"
                id="wd-due"
                value="2024-05-13"/>
            </div>
            <br />
            <div>
              <tr>
                <td>
                  <div>
                    <label htmlFor="wd-afrom">Available from</label>
                  </div>
                  <input type="date"
                    id="wd-afrom"
                    value="2024-05-13"/>
                </td>
                <td>
                  <div>
                    <label htmlFor="wd-auntil">Until</label>
                  </div>
                  <input type="date"
                    id="wd-auntil"
                    value="2024-05-13"/>
                </td>
              </tr>
            </div>
          </td>
        </tr>
        <br />
        <tfoot>
          <tr>
            <th colSpan={2}><hr /></th>
          </tr>
          <tr>
            <td colSpan={2} align="right" text-align="right">
              <button type="button">
                Cancel
              </button> <button type="button">
                Save
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      
    </div>
  );
}
