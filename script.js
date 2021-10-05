
let randomnumber=Math.trunc(Math.random()*20+1);
console.log(randomnumber);
let score=20;
let highscore=0;

let guessnumber=document.querySelector('.guess');
let checkbutton=document.querySelector('.check');
let textdisplay=document.querySelector('.message');
let replacequestionmark=document.querySelector('.number');
let updatescore=document.querySelector('.score');
let updatehighscore=document.querySelector('.highscore');

//again button
document.querySelector('.again').addEventListener('click',function(){
    textdisplay.innerHTML="start guessing...";
    score=20;
    updatescore.innerHTML=score;
    document.body.style.backgroundColor = '#222';
    replacequestionmark.innerHTML='?';
    guessnumber.value='';
    randomnumber=Math.trunc(Math.random()*20+1);
    
})


checkbutton.addEventListener('click',function(){
    if(guessnumber.value!='')
    {
        if(guessnumber.value=='' ||guessnumber.value<1 || guessnumber.value>20)
        {
            textdisplay.innerHTML="Not valid number";

        }
       else if(guessnumber.value <randomnumber && score>1)
        {
            textdisplay.innerHTML="Number too high";
            score--;
            updatescore.innerHTML=score;

        }
        else if(guessnumber.value >randomnumber && score>1)
        {
            textdisplay.innerHTML="Number too Low";
            score--;
            updatescore.innerHTML=score;

        }
        else if(guessnumber.value == randomnumber && score>1)
        {
            textdisplay.innerHTML="Correct number";
            replacequestionmark.innerHTML=guessnumber.value;
            document.body.style.backgroundColor = '#60b347';
            if(score > highscore)
            {
                highscore=score;
                updatehighscore.innerHTML=score;
            }

        }
        else{
            textdisplay.innerHTML="You loose";

        }
    }
})
