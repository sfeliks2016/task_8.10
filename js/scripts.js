//plik scripts.js // obiekt window //


var withButtonClass = document.getElementsByClassName('button');

console.log(withButtonClass);

console.log(withButtonClass.length);


// LUB zgodnie z HTML DOM length Property
/*
var nodelist = document.getElementsByClassName('button').length;

console.log(nodelist);

*/


//pętla, która wykona się tyle razy, ile jest elementów z class='button' na stronie - uzycie wlasciwosci: length.

//pętli wykonuje funkcję, która wyświetla tekst zawarty w każdym z tych buttonów.

for (var i=0; i< withButtonClass.length;i++){
  
  var tab= document.getElementsByClassName("button")[i].textContent; // textContent zamiast innerText!
    
    console.log(tab);     
}
