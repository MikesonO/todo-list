import { task as getTasks } from "./tasks";
import { projectList } from "../classes/projectClass";
import { dateFormat } from "./dataFormat";
import { projects } from "./projects";

export const defaultProjects = (() => {


  const displayAllTasks = () => {
    projectList.forEach((project) => {
      if (project.id !== "inbox") {
        project.tasks.forEach((task) => {
          console.log(project.tasks.done);
          getTasks.appendTask(task.project, task.title, task.date, task.priority, task.done);
        });
      }
    });

  }

  const displayTodaysTasks = () => {
    let today = dateFormat.formatDate(dateFormat.today);
    projectList.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.date === today) {
          getTasks.appendTask(task.project, task.title, task.date, task.priority, task.done);
        }
      });
    });
  }


  const displayThisWeeksTasks = () => {
    projectList.forEach((project) => {
      project.tasks.forEach((task) => {
        if (dateFormat.getWeek(task.date) == true) {
          console.log(task.date);
          getTasks.appendTask(task.project, task.title, task.date, task.priority, task.done);
        } 
      });
    });
  }

  const displayCompletedTasks = () => {
    projectList.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.done == true) {
          getTasks.appendTask(task.project, task.title, task.date, task.priority, task.done);
        }
      });
    });
  } 








  return {
    displayAllTasks,
    displayTodaysTasks,
    displayThisWeeksTasks,
    displayCompletedTasks
  }

})();