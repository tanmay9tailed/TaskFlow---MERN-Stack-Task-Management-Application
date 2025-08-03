import React, { useState } from "react";
import UserSidebar from "./UserSidebar";
import TaskFilter from "../../components/tasks/TaskFilter";

const TaskFilterPage = () => {
 
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <UserSidebar />
      <TaskFilter />

    </div>
      
  );
};

export default TaskFilterPage;
