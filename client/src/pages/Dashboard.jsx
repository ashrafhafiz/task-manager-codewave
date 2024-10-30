/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import moment from "moment";
import { summary } from "../assets/data";
import clsx from "clsx";
import { BGS, PRIOTITY_STYELS, TASK_TYPE, getInitials } from "../utils";
import Chart from "../components/Chart";
import UserInfo from "../components/UserInfo";

const TaskTable = ({ tasks }) => {
  const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
  };

  const TableHeader = () => (
    <thead className="border-b border-gray-300 ">
      <tr className="text-left text-black">
        <th className="py-2">Task Title</th>
        <th className="py-2">Priority</th>
        <th className="py-2">Team</th>
        <th className="hidden py-2 xl:block">Created At</th>
      </tr>
    </thead>
  );

  const TableRow = ({ task }) => (
    <tr className="text-gray-600 border-b border-gray-300 hover:bg-gray-300/10">
      <td className="py-2">
        <div className="flex items-center gap-2">
          <div
            className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}
          />

          <p className="text-base text-black">{task.title}</p>
        </div>
      </td>

      <td className="py-2">
        <div className="flex items-center gap-1">
          <span className={clsx("text-lg", PRIOTITY_STYELS[task.priority])}>
            {ICONS[task.priority]}
          </span>
          <span className="capitalize">{task.priority}</span>
        </div>
      </td>

      <td className="py-2">
        <div className="flex">
          {task.team.map((m, index) => (
            <div
              key={index}
              className={clsx(
                "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                BGS[index % BGS.length]
              )}
            >
              <UserInfo user={m} />
            </div>
          ))}
        </div>
      </td>
      <td className="hidden py-2 xl:block">
        <span className="text-base text-gray-600">
          {moment(task?.date).fromNow()}
        </span>
      </td>
    </tr>
  );
  return (
    <>
      <div className="w-full px-2 pt-4 pb-4 bg-white rounded shadow-md lg:w-2/3 md:px-4">
        <table className="w-full">
          <TableHeader />
          <tbody>
            {tasks?.map((task, id) => (
              <TableRow key={id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const UserTable = ({ users }) => {
  const TableHeader = () => (
    <thead className="border-b border-gray-300 ">
      <tr className="text-left text-black">
        <th className="py-2">Full Name</th>
        <th className="py-2">Status</th>
        <th className="hidden py-2 xl:block">Created At</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className="text-gray-600 border-b border-gray-200 hover:bg-gray-400/10">
      <td className="py-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center text-sm text-white rounded-full w-9 h-9 bg-violet-700">
            <span className="text-center">{getInitials(user?.name)}</span>
          </div>

          <div>
            <p> {user.name}</p>
            <span className="text-xs text-black">{user?.role}</span>
          </div>
        </div>
      </td>

      <td>
        <p
          className={clsx(
            "w-fit px-3 py-1 rounded-full text-sm",
            user?.isActive ? "bg-blue-200" : "bg-yellow-100"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </p>
      </td>
      <td className="hidden py-2 text-sm xl:block">
        {moment(user?.createdAt).fromNow()}
      </td>
    </tr>
  );

  return (
    <div className="w-full px-2 py-4 bg-white rounded shadow-md lg:w-1/3 h-fit md:px-6">
      <table className="w-full mb-5">
        <TableHeader />
        <tbody>
          {users?.map((user, index) => (
            <TableRow key={index + user?._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => {
  const totals = summary.tasks;

  const stats = [
    {
      _id: "1",
      label: "TOTAL TASK",
      total: summary?.totalTasks || 0,
      icon: <FaNewspaper />,
      bg: "bg-[#1d4ed8]",
    },
    {
      _id: "2",
      label: "COMPLETED",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings />,
      bg: "bg-[#0f766e]",
    },
    {
      _id: "3",
      label: "IN PROGRESS ",
      total: totals["in progress"] || 0,
      icon: <LuClipboardEdit />,
      bg: "bg-[#f59e0b]",
    },
    {
      _id: "4",
      label: "TODOS",
      total: totals["todo"],
      icon: <FaArrowsToDot />,
      bg: "bg-[#be185d]",
    },
  ];

  const Card = ({ label, total, icon, bg }) => {
    return (
      <div className="flex items-center justify-between w-full h-32 p-3 bg-white rounded-md shadow-md">
        <div className="flex flex-col justify-between flex-1 h-full">
          <p className="text-base text-gray-600">{label}</p>
          <span className="text-2xl font-semibold">{total}</span>
          <span className="text-sm text-gray-400">{`110 last month`}</span>
        </div>
        <div
          className={clsx(
            "w-10 h-10 rounded-full flex items-center justify-center text-white",
            bg
          )}
        >
          {icon}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full py-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat._id} {...stat} />
        ))}
      </div>

      <div className="w-full p-4 my-16 bg-white rounded shadow-sm">
        <h4 className="text-xl font-semibold text-gray-600">
          Chart by Priority
        </h4>
        <Chart />
      </div>

      <div className="flex flex-col w-full gap-4 py-8 lg:flex-row 2xl:gap-10">
        {/* /left */}

        <TaskTable tasks={summary.last10Task} />

        {/* /right */}

        <UserTable users={summary.users} />
      </div>
    </div>
  );
};

export default Dashboard;
