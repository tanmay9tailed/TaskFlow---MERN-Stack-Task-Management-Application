
import Sidebar from "../../components/admin/Sidebar";
import TaskFilter from "../../components/tasks/TaskFilter";

const TaskFilterAdmin = () => {
 
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      <TaskFilter />

    </div>
      
  );
};

export default TaskFilterAdmin;
