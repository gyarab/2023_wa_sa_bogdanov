let el = document.getElementById('stav-hry');
el.innerHTML = 'Nova hra';

let counter = 0;
let counterMin = 0

let flipped = 0;

const found = [0, 0, 0, 0, 0, 0];
const exist = [0, 0, 0, 0, 0, 0];
let all = 0;

let backImg = '<img src="img/mandala.jpg" alt="">';

const imgChanger = ['<img src="img/dogDriving.jpg" alt="">', '<img src="img/dogHair.jpg" alt="">', '<img src="img/dogMurder.jpg" alt="">',
                    '<img src="img/dogFound.jpg" alt="">', '<img src="img/dogSmile.jpg" alt="">', '<img src="img/dogPilot.jpg" alt="">'];

const cards = [document.getElementById('card-1'), document.getElementById('card-2'), document.getElementById('card-3'), 
                document.getElementById('card-4'), document.getElementById('card-5'), document.getElementById('card-6'),
                document.getElementById('card-7'), document.getElementById('card-8'), document.getElementById('card-9'),
                document.getElementById('card-10'), document.getElementById('card-11'), document.getElementById('card-12')];

let dif = Math.floor(Math.random()*6);

function  generator(){
    dif = Math.floor(Math.random()*6);
    while(exist[dif] == 2){
        dif = Math.floor(Math.random()*6);
    }
    exist[dif]++;
    return dif;
}

function myFnc(){
    if(counter < 10){
        el.innerHTML = "timer:" + counterMin + ": 0" + counter;
        counter++;
    }
    else{
        el.innerHTML = "timer:" + counterMin + ":" + counter;
        counter++;
    }
    if(counter < 60){
        setTimeout(myFnc, 1000);
    }
    if(counter == 60){
        counter = 0;
        setTimeout(myFnc, 1000);
        counterMin++;
    }
    if(counterMin == 60){
        document.write("page ended")
    }
}

setTimeout(myFnc, 1000);

const  index = [generator(), generator(), generator(), generator(), 
            generator(), generator(), generator(), generator(), 
            generator(), generator(), generator(), generator()]; 


let before = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function call(){
    let i = 0;
    while(i < 12){
        if(before[i] == 1){
            clickCard(i);
        }
        i++;
    }
    
} 
function clickCard(cardIndex){
    cards[cardIndex].innerHTML = imgChanger[index[cardIndex]];
    flipped ++;
    found[index[cardIndex]]++;
    before[cardIndex] = 1;

   if(flipped == 2 && (found[index[cardIndex]] >= 2 || found[index[cardIndex]] == 3)){
        flipped = 0;
        cards[cardIndex].removeAttribute("onclick");
        before[cardIndex] = 0;
        call();
    }
    else if(flipped == 2 && found[index[cardIndex]] == 1){
        cards[cardIndex].innerHTML = backImg;
        before[cardIndex] = 0;
        flipped = 0;
        found[index[cardIndex]] = 0;
        call();
    }else if(flipped == 1 && found[index[cardIndex]] == 2 ){
        cards[cardIndex].innerHTML = backImg;
        before[cardIndex] = 0;
        flipped = 0;
        found[index[cardIndex]] = 0;
        call();
    }else if(flipped == 1 && found[index[cardIndex]] == 3 ){
        before[cardIndex] = 0;
        flipped = 0;
        all++
    }
    if(all == 6){
        document.write("winner ")
    }
}