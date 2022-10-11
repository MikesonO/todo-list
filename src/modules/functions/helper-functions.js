
function inputCheck(input) {
  if (input.value === "") {
    alert('Field should not be empty.');
    return false;
  } else return true;
}

function resetInput(input) {
  input.value = "";
}


export{inputCheck, resetInput}