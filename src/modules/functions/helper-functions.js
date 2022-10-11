
function inputCheck(input) {
  if (input.value === "") {
    alert('Field should not be empty.');
    return false;
  } else return true;
}

function resetInput(input) {
  input.value = "";
}

function enterKey(input, button){
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      button.click();
}})};

export{inputCheck, resetInput, enterKey}