//plik scripts.js // obiekt window //


var withButtonClass = document.getElementsByClassName('button');

console.log(withButtonClass); // wtswietli tablice elementow z class='button'

console.log(withButtonClass.length);// wyswietli dlugosc tablicy



//pętla wykonuje funkcję, która wyświetla tekst zawarty w każdym z tych buttonów za pomoca funkcji alert().

for (var i=0; i< withButtonClass.length;i++){
  
  var tab= document.getElementsByClassName("button")[i].textContent; // textContent zamiast innerText!
    
    alert(tab);     
}

//pętla wykonuje się tyle razy, ile jest elementów z class='button' na stronie - uzycie wlasciwosci: length.

//pętli wykonuje funkcję, która wyświetla w konsoli tekst zawarty w każdym z tych buttonów.

for (var i=0; i< withButtonClass.length;i++){
  
  var tab= document.getElementsByClassName("button")[i].textContent; // textContent zamiast innerText!
    
    console.log(tab);     
}
