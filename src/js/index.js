import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const counter = document.querySelector(".counter--js");
const buttonAdd = document.querySelector(".hydrapp__add--js");
const buttonRemove = document.querySelector(".hydrapp__remove--js");
//klucz jako data
const key = new Date().toISOString().slice(0, 10);

let currentGlassCounter = 0;

//sprawdzamy czy nie ma juz czegos zapisanego w local storage

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  currentGlassCounter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

counter.innerHTML = currentGlassCounter;

buttonAdd.addEventListener("click", () => {
  currentGlassCounter++;
  counter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});

buttonRemove.addEventListener("click", () => {
  if (currentGlassCounter > 0) {
    currentGlassCounter--;
  } else {
    alert("Nie możesz usunąć szklanki. Jest już 0");
  }
  counter.innerHTML = currentGlassCounter;
  localStorage.setItem(key, currentGlassCounter);
});
