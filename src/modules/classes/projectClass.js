  //List of Projects
  let projectList = [{
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
      "id": "this-week",
      "tasks": []
    }
  ];

  //Project Class
  class Project {
    constructor(title, id) {
      this.title = title;
      this.id = id;
      this.tasks = [];
    }
  }

  export {projectList, Project}