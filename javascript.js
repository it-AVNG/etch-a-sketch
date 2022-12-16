//access a variable grid container
var gridContainer = document.querySelector("#gridContainer");

//function to update gridTemplateColumns inline styling
function updateTemplate(sideNumber){
  let string = '';
  string =`repeat(${sideNumber}, 1fr)`;
  return string;
}
//create function to update grid container
function updateGridContainer(sideNumber){
  //create a loop to append the child div
  for(let i=1; i<=gridSize; i++){
    //create a grid element div
    const childDiv = document.createElement("div");
    // set the child class name
    childDiv.className = 'grid-items';
    //append the element to the container
    gridContainer.appendChild(childDiv);
  };

  //create a method to access and update grid template columns accordingly
  document.getElementById(
    "gridContainer"
  ).style.gridTemplateColumns = updateTemplate(sideNumber);

};
//a Function to clear all child node
function removeAllChildNodes(parent){
    while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}





//Main program:

//add sliders presentation method
var slider = document.getElementById("gridSide");
var sliderOutput = document.getElementById("sliderVal");
//update slider value
sliderOutput.innerHTML = slider.value;
slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
}


//check grid size from previous build
var gridSide =slider.value; 
var gridSize = Math.pow(gridSide, 2);
//update the grid container with the above parameters
removeAllChildNodes(gridContainer);
updateGridContainer(gridSide);


//delegate the event listener to the container for mouseover event
gridContainer.addEventListener(
  "mouseover", function(e) {
    const target = e.target;
    if (target.className === 'grid-items'){ 
      e.target.style.backgroundColor= "black";
    };
  }
);


//listen to slider changes
slider.addEventListener('input', function(){
  //update the grid container with the change

  //remove the previous node
  removeAllChildNodes(gridContainer);
  //update the new node
  gridSide =slider.value;
  gridSize = Math.pow(gridSide, 2);
  updateGridContainer(gridSide);

})


//end Main program




