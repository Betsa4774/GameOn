function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//ici commence l'excercise 

reserve = document.getElementById('reserve'); //on fait reserve et on rajoute un événement et 
 //serà à la sumision de formulaire qu on voudra declencher une fonction et cette fonction on va lui passer l'événement en question
//reserve = document.getElementById('reserve'); 
//let compteur = 0

reserve.addEventListener('submit',function(e) {
  // Variables--//creation des variables et recuperations d'elles mêmes par document.get et son Id.
  // ceci permet de récuperer le formulaire
//Variables
  e.preventDefault();
  const first = document.getElementById('first'); 
  const last = document.getElementById('last');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const myError = document.getElementById('error');
  const myError1 = document.getElementById('error1');
  const myError2 = document.getElementById('error2');
  const myError3 = document.getElementById('error3');
  const myError4 = document.getElementById('error4');
 
  // const location1 = document.getElementById('location1');
  //  const location2 = document.getElementById('location2');
  //  const location3 = document.getElementById('location3');
  //  const location4 = document.getElementById('location4');
  //  const location5 = document.getElementById('location5'); 
  //  const location6 = document.getElementById('location6'); 
  const selectionFinal = new FormData(document.querySelector("form"));
 let compteur = 0;
    
  if (first.value == "") {   
    myError.innerHTML = "Veuillez entrer 2 lettres minimum pour le champ du prenom."; 
    myError.style.color = 'red';

    
  }
  else { 
  compteur++ 
    myError.innerHTML = ""; 
  }
  // nom
  if (last.value == "") {  
    myError1.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; 
    myError1.style.color = 'red';   
  }  
  else {
    myError1.innerHTML = ""; 
  }
  //email
    if (email.value == "") {      
      myError2.innerHTML = "Veuillez entrer un email valide."; 
      myError2.style.color = 'red';      
    }  
    else {
      myError2.innerHTML = ""; 
    }
  //Date de naissance- birthdate
  if (birthdate.value == "") {      
    myError3.innerHTML = "Vous devez entrer votre date de naissance."; 
    myError3.style.color = 'red'; 
  } 
  else {
    myError3.innerHTML = ""; 
  }
  //Tournois -quantity     
  if (quantity.value == "") {        
    myError4.innerHTML = "Vous devez saisir un nombre."; 
    myError4.style.color = 'red';    
  }  
  else {
    myError4.innerHTML = ""; 
  } //choix de la ville
  if(document.getElementById('location1').checked) {
    document.getElementById("errorMsg").innerHTML
    = document.getElementById("location1").value;
  }
  else if(document.getElementById('location2').checked) {
    document.getElementById("errorMsg").innerHTML
    = document.getElementById("location2").value;  
  }
  else if(document.getElementById('location3').checked) {
    document.getElementById("errorMsg").innerHTML
    = document.getElementById("location3").value;
  }
  else if(document.getElementById('location4').checked) {
    document.getElementById("errorMsg").innerHTML
    = document.getElementById("location4").value;
  }
  else if(document.getElementById('location5').checked) {
    document.getElementById("errorMsg").innerHTML
    = document.getElementById("location5").value;
  }
  else if(document.getElementById('location6').checked) {
    document.getElementById("errorMsg").innerHTML
    = document.getElementById("location6").value;
  }
  else {
    document.getElementById("errorMsg").innerHTML
    = "Veuillez selectionner une ville";
  } 
 //Conditions et informations. Esta parte esta mal, debo cambiarla

  if(!selectionFinal.has("gameon"))
  {
    document.getElementById("errorMessage").style.visibility = "visible";
    return false;      
  }
  else
  {
    document.getElementById("errorMessage").style.visibility = "hidden";
    return true;
  } 
 
});

 // 1ére méthode Close Modal

const close = document.getElementById('close');
const bground = document.getElementById('bground');
 
close.addEventListener("click", () => {
  if(getComputedStyle(bground).display != "none"){
   bground.style.display = "none";
  }    
  
});
//----});

// 2émé méthode -on click 

// const close = document.getElementById("close"); 
// const bground = document.getElementById('bground');

// function closeM(){
//  if(getComputedStyle( bground).display != "none"){
//    bground.style.display = "none";
//   }   
// };
// close.onclick = closeM;






