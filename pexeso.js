let el = document.getElementById('stav-hry');
el.innerHTML = 'Nova hra';

let counter = 5;

function myFnc(){
    console.log('myFnc executed');
    el.innerHTML = counter;
    counter--;
    if(counter > 0){
        setTimeout(myFnc, 1000)
    }
}

setTimeout(myFnc, 1000);

let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');

function clickCard1(){
    card1.innerHTML = '<img src="img/dogDriving.jpg" alt="">'; 
}

function clickCard2(){
    card2.innerHTML = '<img src="img/dogDriving.jpg" alt="">' ;
}