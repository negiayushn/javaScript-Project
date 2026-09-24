const num= document.getElementById('number');
let counter1= document.getElementById('bt1');
let counter2= document.getElementById('bt2');
let count =1;



 counter1.addEventListener('click',()=>{
 count++;
      num.textContent= count;
    });



    counter2.addEventListener('click',()=>{
        count--;
       num.textContent= count;
    });

