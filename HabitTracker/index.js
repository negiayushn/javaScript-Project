let input = document.getElementById("habitInput");
const addHabit = document.getElementById("bt1");
let main = document.getElementById("Main");
const type = document.getElementById("habitCategory");



let habitArray = JSON.parse(
    localStorage.getItem("habits")
) || [];

function saveHabits() {
    localStorage.setItem(
        "habits",
        JSON.stringify(habitArray)
    );
}

function habittext() {
  let habitObj = {
    habit: input.value,
    completed: false,
    catagory:type.value
  };
       if (input.value.trim() === "") {
        input.focus();
        return;
    }

    if (type.value === "") {
        type.focus();
        return;
    }

  habitArray.push(habitObj);
   saveHabits();
  createHabit(habitObj);
  input.value = "";
  type.value = "";
}
function createHabit(habitObj) {
  let habitbox = document.createElement("div");
  let habitInput = document.createElement("span");
  let habitComplitation = document.createElement("button");
  const remove = document.createElement('button');
  const typetetx= document.createElement('span')
  habitInput.innerText = habitObj.habit;

  if (habitObj.completed === true) {
    habitComplitation.innerText = "Completed";
  } else if (habitObj.completed === false) {
    habitComplitation.innerText = "Incomplete";
  }
  habitComplitation.addEventListener("click", () => {
    if (habitObj.completed === false) {
      habitObj.completed = true;
      habitComplitation.innerText = "Completed";
    } else if (habitObj.completed === true) {
      habitObj.completed = false;
      habitComplitation.innerText = "Incomplete";
    }
      saveHabits();
  });
typetetx.innerText = habitObj.catagory;

remove.innerText='remove';
remove.addEventListener('click',()=>{
    habitbox.remove();
    let index = habitArray.indexOf(habitObj);
    habitArray.splice(index, 1);
    saveHabits();
})
 habitbox.append(typetetx);
  habitbox.append(habitInput);
  habitbox.append(habitComplitation);
  habitbox.append(remove);
  main.append(habitbox);
}
addHabit.addEventListener("click", habittext);
habitArray.forEach((habitObj) => {
    createHabit(habitObj);
});