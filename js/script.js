console.log("hi");
const body = document.getElementsByName("body");
const myName = document.getElementById("myName");

function nameClicked(){
    myName.classList.remove("animated", "flipInY");
    myName.classList.add("animated", "flipInY");
  }

myName.addEventListener("click", nameClicked);