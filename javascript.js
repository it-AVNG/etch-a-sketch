//function to update gridTemplateColumns
function updateTemplate(number){
  let string = '';
  for (let i=1; i<=number;i++){
    string += ' auto';
    console.log(string);
  }
  return string;
}

//access a variable grid container
const divContainer = document.querySelector(".container")
//create a variable holds the size of the divs
const divSide = 16; //16x16 divs
const divSize = Math.pow(divSide, 2);
//create a looop function to append the child div
for(let i=1; i<=divSize; i++){
  //create a grid element div
  const childDiv = document.createElement("div");
  childDiv.innerHTML = `child ${i}`;
  childDiv.className = 'div-items' 
  //append the element to the container
  divContainer.appendChild(childDiv);

}
//create a method to access and update grid template columns accordingly
document.getElementById(
  "divContainer"
).style.gridTemplateColumns = updateTemplate(divSide);


