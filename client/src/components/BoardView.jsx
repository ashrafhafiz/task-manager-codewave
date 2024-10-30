/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import TaskCard from "./TaskCard";

const BoardView = ({ tasks }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 2xl:gap-10">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default BoardView;
