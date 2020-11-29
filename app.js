var valueLista = [];
 
 function countTotalt(event){

  // hemsidan ska inte updateras och data ska inte försvinna

  event.preventDefault();
  
  
  var options = document.querySelector("#selectOption")
  console.log(options.value)
  if(options.value === "+")
  {
  
  var description= document.querySelector("#description").value;
  var value= document.querySelector("#value").value;
  
  valueLista.push( Number(value) )
  //Number(value) konverterar value till en siffra 
  
  var inkomstData = document.querySelector(".inkomstData")
  
  inkomstData.innerText = value; 
 
 
  var li = document.createElement("li");
  
  li.innerText= description + " " + value;
  
  var ul = document.querySelector(".listaIncome")
  
  ul.appendChild(li);
  

  }
  
  else if(options.value === "-" )
  {

  //ifall användare väljer minus uppdateras kosntad, - kostnadListan

  var description = document.querySelector("#description").value;

  var value = document.querySelector("#value").value;
  //pusha value in i valueLista: 
  valueLista.push( Number(-value) )

  var utgiftData = document.querySelector(".utgiftData")

  utgiftData.innerText = value;

  var li = document.createElement("li");

  li.innerText = description + " " + value;

  var ul = document.querySelector(".utgiftKostnad")
  ul.appendChild(li)
  }


 console.log(valueLista)
  // - vinst
 var summa = 0;
  for(var i= 0; i<valueLista.length; i++ ){
  summa += valueLista[i];
  }
  var vinstSpan = document.querySelector(".vinstData")
  
  vinstSpan.innerText = summa;
  
 }
  
 function rensa() {
  location.reload();
  //reloada om hela sidan som en "rensnings funktion"
 }

 //Lägg till och rensa funktion knapp
 var btn = document.querySelector(".add");
 btn.addEventListener("click" , countTotalt );
  
 var clean = document.querySelector(".rensa")
  
 clean.addEventListener("click", rensa )