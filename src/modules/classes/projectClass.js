  //List of Projects
  let defaultProjectList = [{
      "title": "Inbox",
      "id": "inbox",
      "tasks": []
    },
    {
      "title": "Today",
      "id": "today",
      "tasks": []
    }, {
      "title": "This Week",
      "id": "thisWeek",
      "tasks": []
    }, {
      "title": "Completed",
      "id": "completed",
      "tasks": []
    }
  ];

    //Gets list of projects from local storage or start with default
    let projectList = localStorage.getItem("userProjectList");   projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));

    const saveToLocalStorage = () =>{
      localStorage.setItem("userProjectList", JSON.stringify(projectList));
      // const createdProjects = localStorage.getItem("userProjectList");
      //  console.log(createdProjects);
      // console.log(projectList);
    }

  //Project Class
  class Project {
    constructor(title, id) {
      this.title = title;
      this.id = id;
      this.tasks = [];
    }
  }
  

  export {projectList, Project, saveToLocalStorage}