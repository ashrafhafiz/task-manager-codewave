/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useState } from "react";
import {
  MdAttachFile,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { BGS, PRIOTITY_STYELS, TASK_TYPE, formatDate } from "../utils";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import UserInfo from "./UserInfo";
import { IoMdAdd } from "react-icons/io";
import TaskDialog from "./task/TaskDialog";
import AddSubTask from "./task/AddSubTask";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const TaskCard = ({ task }) => {
  // const user = useSelector((state) => state.auth.user);
  const user = "";
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full p-4 bg-white rounded shadow-md h-fit">
        <div className="flex justify-between w-full">
          <div
            className={clsx(
              "flex flex-1 gap-1 items-center text-sm font-medium",
              PRIOTITY_STYELS[task?.priority]
            )}
          >
            <span className="text-lg">{ICONS[task?.priority]}</span>
            <span className="uppercase">{task?.priority} Priority</span>
          </div>

          {user?.isAdmin && <TaskDialog task={task} />}
        </div>

        <>
          <div className="flex items-center gap-2">
            <div
              className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}
            />
            <h4 className="text-black line-clamp-1">{task?.title}</h4>
          </div>
          <span className="text-sm text-gray-600">
            {formatDate(new Date(task?.date))}
          </span>
        </>

        <div className="w-full my-2 border-t border-gray-200" />
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <BiMessageAltDetail />
              <span>{task?.activities?.length}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 ">
              <MdAttachFile />
              <span>{task?.assets?.length}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 ">
              <FaList />
              <span>0/{task?.subTasks?.length}</span>
            </div>
          </div>

          <div className="flex flex-row-reverse">
            {task?.team?.map((m, index) => (
              <div
                key={index}
                className={clsx(
                  "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                  BGS[index % BGS?.length]
                )}
              >
                <UserInfo user={m} />
              </div>
            ))}
          </div>
        </div>

        {/* sub tasks */}
        {task?.subTasks?.length > 0 ? (
          <div className="py-4 border-t border-gray-200">
            <h5 className="text-base text-black line-clamp-1">
              {task?.subTasks[0].title}
            </h5>

            <div className="p-4 space-x-8">
              <span className="text-sm text-gray-600">
                {formatDate(new Date(task?.subTasks[0]?.date))}
              </span>
              <span className="px-3 py-1 font-medium text-blue-700 bg-blue-600/10 rounded0full">
                {task?.subTasks[0].tag}
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="py-4 border-t border-gray-200">
              <span className="text-gray-500">No Sub Task</span>
            </div>
          </>
        )}

        <div className="w-full pb-2">
          <button
            onClick={() => setOpen(true)}
            disabled={user.isAdmin ? false : true}
            className="flex items-center w-full gap-4 text-sm font-semibold text-gray-500 disabled:cursor-not-allowed disabled::text-gray-300"
          >
            <IoMdAdd className="text-lg" />
            <span>ADD SUBTASK</span>
          </button>
        </div>
      </div>

      <AddSubTask open={open} setOpen={setOpen} id={task._id} />
    </>
  );
};

export default TaskCard;