let check = 1;
let navi = document.getElementById('nav');
function navigate(){
    if(check == 1){
        navi.classList.replace('nav-first', 'nav-second');
        check = 0;
    }
    else{
        navi.classList.replace('nav-second','nav-first');
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
}
document.querySelector('#burger').addEventListener('click', navigate());
document.querySelector('#effect').addEventListener('hover', neon());