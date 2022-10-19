import { task as getTasks } from "./tasks";
import { projectList } from "../classes/projectClass";
import { dateFormat } from "./dataFormat";

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

  const displayTodaysTasks = () => {
    let today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    today = dateFormat.getDate(today);

    projectList.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.date === today) {
          getTasks.appendTask(task.project, task.title, task.date, task.priority);
        }
      });
    })
  }










  return {
    displayAllTasks,
    displayTodaysTasks
  }

})();