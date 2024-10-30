/* eslint-disable react/prop-types */
import clsx from "clsx";
import { IoMdAdd } from "react-icons/io";

const TaskTitle = ({ label, className }) => {
  return (
    <div className="flex items-center justify-between w-full h-10 px-2 bg-white rounded md:h-12 md:px-4">
      <div className="flex items-center gap-2">
        <div className={clsx("w-4 h-4 rounded-full", className)} />
        <p className="text-sm text-gray-600 md:text-base">{label}</p>
      </div>
      <button className="hidden md:block" onClick={() => {}}>
        <IoMdAdd className="text-lg text-black" />
      </button>
    </div>
  );
};

export default TaskTitle;
