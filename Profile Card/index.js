const Name = document.getElementById("name");
const Profile = document.getElementById("profile");
const nameButton = document.getElementById("button");


// Change name
nameButton.addEventListener("click", function () {
    Name.textContent = prompt("Enter name");
});


// Create new element
const newElement = function () {

    const newDiv = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = "lorem";

    newDiv.append(p);
    Profile.append(newDiv);
};

newElement();


// Create image div
const div = document.createElement("div");

div.textContent = "Hello new div";

div.style.backgroundImage = "url('image.jpg')";
div.style.height = "200px";
div.style.width = "200px";

Profile.append(div);


// Create button
const backgroundButton = document.createElement("button");

backgroundButton.textContent = "Remove background";

Profile.append(backgroundButton);


// Toggle background
let backgroundOn = true;

backgroundButton.addEventListener("click", function () {

    if (backgroundOn) {

        div.style.backgroundImage = "";
        backgroundOn = false;

    } else {

        div.style.backgroundImage = "url('image.jpg')";
        backgroundOn = true;

    }

});

// new element to practice classlist
const Box = document.createElement('div');
Box.classList.add('newbox');
Box.innerHTML='hlo';
document.body.appendChild(Box);
const b= document.getElementsByClassName('newbox');
b[0].style.backgroundColor='red';
Box.addEventListener('click',function(){
    //  toogle class
    Box.classList.toggle('newbox')
    
    if (Box.classList.contains('newbox')) {
        Box.style.backgroundColor = 'red';
    } else {
        Box.style.backgroundColor = 'green';
    }
    
})
