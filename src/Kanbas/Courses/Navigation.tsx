import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={cid} to={`/Kanbas/Courses/${cid}/${link}`}
        className={`list-group-item border-0  
          ${pathname.includes(link) ? "active" : "text-danger"}`}> {link} </Link>
      ))}
    </div>
);}


