import { task as getTasks } from "./tasks";
import { projectList } from "../classes/projectClass";

export const defaultProjects = (() => {


  const displayAllTasks = () => {
    projectList.forEach((project) => {
      if (project.id !== "inbox") {
        project.tasks.forEach((task) => {
          getTasks.appendTask(task.project, task.title, task.date, task.priority);
        });
      }
    });
  }










  return {
    displayAllTasks
  }

})();