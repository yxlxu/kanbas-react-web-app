import { Link } from "react-router-dom";
import img from '../images/5610.jpg'; 
//citation: copied from https://stackoverflow.com/questions/20033712/html-img-src-wont-load-my-images

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src={img} width={200}/>
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> CS 5001 </div>
        <div className="wd-dashboard-course"> CS 5010 </div>
        <div className="wd-dashboard-course"> CS 5008 </div>
        <div className="wd-dashboard-course"> MAT 21A </div>
        <div className="wd-dashboard-course"> MAT 21A Lab </div>
        <div className="wd-dashboard-course"> CS 5610 </div>
        <div className="wd-dashboard-course"> CS 5200 </div>
      </div>
    </div>
  );
}

