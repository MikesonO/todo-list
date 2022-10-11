import {inputCheck,resetInput} from "./helper-functions";
export const createProject = (() => {

  const addProject = () =>{
    const projectNameInput = document.querySelector("[data-modal-input='project']");
    const projectName = projectNameInput.value;
    console.log(projectName);
    inputCheck(projectName);
    resetInput(projectNameInput);
  }

  


  return{
    addProject
  }

})();