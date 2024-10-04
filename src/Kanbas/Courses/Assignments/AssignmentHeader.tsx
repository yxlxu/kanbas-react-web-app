import { BsSearch } from "react-icons/bs";

export default function AssignmentHeader() {
  return (
    <div className="dropdown d-inline float-end d-inline-flex">
      <div className="pt-2 pb-2 ps-3 d-flex align-items-center me-1 border rounded-sm">
        <BsSearch />
        <input id="wd-search-assignment" placeholder="Search..." style={{border: 'none'}} className="pr-40">
        </input>
      </div> <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1">
          + Group
      </button> <button id="wd-add-assignment" className="btn btn-lg btn-danger dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          - Assignment
      </button>
    </div>
  )
}