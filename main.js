let check = 1;
let navi = document.getElementById('nav');
let burg = document.getElementById('burger');
let hidde = document.getElementById('contacts');

function pop(chance){
    if (chance == 1){
        hidde.classList.replace('contact-container', 'hide');
        document.getElementById('phone').classList.add('tablehide');
    }
    else if(chance==2)
    {
        hidde.classList.replace('hide', 'contact-container');
        document.getElementById('phone').classList.remove('tablehide');
    }
    else return;
   
}

function navigate(){
    if(check == 1){
        navi.classList.replace('nav-first', 'nav-second');
        burg.classList.replace('fa-close','fa-bars');
        //burg.style.transition('1s');
        check = 0;
    }
    else{
        navi.classList.replace('nav-second','nav-first');
        burg.classList.replace('fa-bars','fa-close');
        //burg.style.transition('1s');
        check = 1;
    }
}

function neon(ton){
    if(ton == 1){
        document.getElementById('title').classList.replace('font-effect-fire','font-effect-neon');
    }
    else if(ton == 0)
    {
        document.getElementById('title').classList.replace('font-effect-neon','font-effect-fire');
    }
    else return;
}
document.querySelector('#burger').addEventListener('click', navigate());