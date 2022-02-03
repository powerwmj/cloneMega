// header, footer 불러오기
const elBody = document.querySelector('body');
const elHeader = document.createElement('header');
const elFooter = document.createElement('footer');

elBody.prepend(elHeader);
elBody.append(elFooter);

// header events
let afterHead = function(){
    const elBurger = document.querySelector('.bugermenu');
    const elBp = document.querySelector('.bugermenu p');
    const elMy = document.querySelector('.my');
    const elSearch = document.querySelector('.search');
    // burgermenu
    elBurger.onclick = function(){
        elBp.classList.toggle('active');
        elMy.classList.remove('active');
        elSearch.classList.remove('active');

    }
    // my
    elMy.onclick = function(){
        elMy.classList.toggle('active');
        elBp.classList.remove('active');
        elSearch.classList.remove('active');
    }
    // search
    elSearch.onclick = function(){
        elSearch.classList.toggle('active');
        elMy.classList.remove('active');
        elBp.classList.remove('active');
    }
}

$('header').load('incom.html header >div', afterHead);
$('footer').load('incom.html footer >div');
//fetch 이용하기





