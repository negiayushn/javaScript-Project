const main = document.getElementById('main');
const display=  document.getElementById('display');
const problem = document.getElementById('problem');
const answer =document.getElementById('answer');
const controls= document.getElementById('controls');

let controlsArray =['1','2','3','4','5','6','7','8','9','0','.','-','+','/','*','Ac','Del','='];

let inputProblem = document.createElement('div');
problem.append(inputProblem);
 

function createButtons(controlsArray){
controlsArray.forEach(element => {
  let button= document.createElement('button')
        button.innerText=element;
        controls.append(button);
        
        button.addEventListener('click',()=>{
       if (element === 'Ac') {
    inputProblem.innerText = '';
} 
else if(element==='Del') {
    inputProblem.innerText = inputProblem.innerText.slice(0, -1);
}
else if(element==='=') {
   answer.innerText = eval(inputProblem.innerText);}

 
else {
    inputProblem.innerText += element;
}
        
        })
    });

    
}
createButtons(controlsArray);


/// version 2 calculator 


const main2 = document.getElementById('main2');
const display2=  document.getElementById('display2');
const problem2= document.getElementById('problem2');
const answer2 =document.getElementById('answer2');
const controls2= document.getElementById('controls2');

let controlsArray2 =['1','2','3','4','5','6','7','8','9','0','.','-','+','/','*','Ac','Del','='];
