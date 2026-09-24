// let task = document.getElementById('input');
// let add= document.getElementById('bt1');
//  let main = document.getElementById('main')
// function createBar (){
//    let todo = document.createElement('div');
//    todo.innerText=task.value;
//    main.append(todo);
//   task.value='';
//   let remove= document.createElement('button');
//   remove.innerText='Remove'
//   remove.classList.add('delet')
//   main.append(remove)
//   remove.addEventListener('click',()=>{
//     remove.remove();
//     todo.remove();
//   })
// }

// add.addEventListener('click',createBar);
let task = document.getElementById('input');
let add = document.getElementById('bt1');
let main = document.getElementById('main');
let taskarray = [];
function addtask() {

    let taskobj = {
        task: task.value,
        completed: false
    };

    taskarray.push(taskobj);

    createBar(taskobj);

    task.value = '';
}

function createBar(taskobj) {
   let box = document.createElement('div');
    let todo = document.createElement('span');

    todo.innerText = taskobj.task;
    let remove = document.createElement('button');
    if(taskobj.completed===false){
        remove.innerText="Incomplete";
    }
     remove.addEventListener('click', () => {

        if (taskobj.completed === false) {

            taskobj.completed = true;
            remove.innerText = "Completed";

        } else {

            taskobj.completed = false;
            remove.innerText = "Incomplete";

        }

    });
    let delet = document.createElement('button');
    delet.innerText='Remove'
    delet.addEventListener('click',()=>{
    let index = taskarray.indexOf(taskobj);

    taskarray.splice(index, 1);

        box.remove();
    })

  box.append(todo);
    box.append(remove);
    box.append(delet);

    main.append(box);
}


  add.addEventListener('click',addtask)

  