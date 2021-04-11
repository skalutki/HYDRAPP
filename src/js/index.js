import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const counter= document.querySelector('.counter--js');
const buttonAdd= document.querySelector('.hydrapp__add--js');
const buttonRemove= document.querySelector('.hydrapp__remove--js');

//sprawdzamy czy nie ma juz czegos zapisanego w local storage

const entry = localStorage.getItem('date');

let result = '';

if(entry){
      // zmieniamy string z iloscia szklanek na wartosc number
  result = JSON.parse(entry);
  counter.innerHTML=localStorage.getItem('date')
}else{
    // Jeśli nie ma entry to zapisz jako 0
    result=0;
    localStorage.setItem("date", result);
    
}



buttonAdd.addEventListener('click', () => {
    console.log('dodaj szklanke');
    result=result+1;
    console.log(result);
    localStorage.setItem("date", result);
    counter.innerHTML=localStorage.getItem('date');
});

buttonRemove.addEventListener('click', () => {
    console.log('usuń szklanke');
    
//jesli szklanka bedzie wieksza od 0 to odejmi jesli nie to wyswietl komunikat

    if(result>0){
    result=result-1;
    console.log(result);
    localStorage.setItem("date", result);    
    counter.innerHTML=localStorage.getItem('date');
    }else{
        console.log('Nie możesz usunąć szklanki. Jest już 0');
    }
});

