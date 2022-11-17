
const ageBtn = document.getElementById('ageBtn');

ageBtn.addEventListener('click', function(){

const output = document.getElementById('space');

const current = document.getElementById('currentyear').value;

const birthYear = document.getElementById('birthyear').value;
age = current-birthYear;

if (age >=18){
 output.innerHTML= `you dey ${age} years old, you don old! &#128104 &#128105`;
     }
     else if(age<=18 && age>=12){
         output.innerHTML= `you dey  ${age} years old, you still dey grow! &#128103 &#128102` ;
     }
     else{
        output.innerHTML= `you dey  ${age} years old, you be small pikin! &#128118` ;
     }
});





