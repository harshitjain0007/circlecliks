const btn1 = document.getElementById("reset");
const btn2 = document.getElementById("undo");
const btn3 = document.getElementById("redo");
const allbutton2 = document.getElementsByClassName("button");


let circlepicks = [];

function getRandomColor() {
  const rcolor = "0123456789abcdef";
  let colorck = '#';
  for (let i=0; i<6; i++){
    colorck += rcolor[Math.floor(Math.random() * 16)];
  }
return colorck;
}

function createcircle(event){
    
    const circlepick = document.createElement("div");
    const colorck = getRandomColor();

    circlepick.classList.add("circlepick");
    circlepick.style.backgroundColor = colorck;
    
    document.body.appendChild(circlepick);
    circlepicks.push(circlepick)

 if (circlepicks.length === 1){
       allbutton2.display = "block";
    }
  }

function undo (){
      
 const lastcircle = circlepicks.pop();
 if (lastcircle){
      lastcircle.remove()
 }
}
function reset (){
    circlepicks.forEach(circlepick => circlepick.remove());
    circlepick = [];
    allbutton2.display = "none";

}

document.body.addEventListener("click", createcircle);

btn1.addEventListener("click", reset);

btn2.addEventListener("click", undo);

