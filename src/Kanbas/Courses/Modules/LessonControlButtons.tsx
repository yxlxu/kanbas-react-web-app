import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
  return (
    <div className="float-end ms-3 fs-5 my-auto">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-5" />
    </div>
  );
}
