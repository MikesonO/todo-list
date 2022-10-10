
import {addProjectModal} from './add-project-modal';

export function eventEmitter(){
  const addProjectButton = document.querySelector("#addProject-btn");
  addProjectButton.addEventListener("click", addProjectModal.show);



  const closeButton = document.querySelector(".close-btn");
  console.log(closeButton);
  closeButton.addEventListener('click', addProjectModal.hide);
}



