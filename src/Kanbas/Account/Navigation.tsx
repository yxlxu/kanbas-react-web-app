import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("Current User in Navigation:", JSON.stringify(currentUser, null, 2));
    console.log("Current User Role:", currentUser?.role);
  }, [currentUser]);
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}> {link} </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> 
      )}
    </div>
  );
}