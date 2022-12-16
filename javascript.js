//function to update gridTemplateColumns
function updateTemplate(){
  let string = '';
  string =`repeat(${divSide}, 1fr)`;
  return string;
}

//create function to update the sketchpad
function updateSketchPad(){
  
  //create a loop to append the child div
  for(let i=1; i<=divSize; i++){
    //create a grid element div
    const childDiv = document.createElement("div");
    // set the child class name
    childDiv.className = 'grid-items';
    //set the child to listen to event and change the color
    childDiv.addEventListener("mousedown",function(){
      childDiv.style.backgroundColor = 'white';
    });
   
    //append the element to the container
    gridContainer.appendChild(childDiv);

  };

  //create a method to access and update grid template columns accordingly
  document.getElementById(
    "gridContainer"
  ).style.gridTemplateColumns = updateTemplate(divSide);

};


//access a variable grid container
const gridContainer = document.querySelector("#gridContainer");
//create a variable holds the size of the divs
const divSide = 16; //16x16 divs
const divSize = Math.pow(divSide, 2);
//update the sketchpad with the above parameters
updateSketchPad();

//delegate the event listener to the container for mouseover event
gridContainer.addEventListener(
  "mouseover", function(e) {
    const target = e.target;
    if (target.className === 'grid-items'){ 
      e.target.style.backgroundColor= "black";
    };
   
  }
);





