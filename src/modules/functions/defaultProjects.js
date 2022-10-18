import { project as getProjects} from "./projects";
import { task as getTasks} from "./tasks";
import { projectList } from "../classes/projectClass";

export const defaultProjects = (() => {


  const displayAllTasks = () =>{
    getProjects.clearProjectTasks();
    projectList.forEach((project) =>{
      project.tasks.forEach((task) => {
        getTasks.appendTask(task.project, task.title, task.date, task.priority);
      });
  });
  }

  








  return {
    displayAllTasks
  }

})();