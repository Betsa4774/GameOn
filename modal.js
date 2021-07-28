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

reserve = document.getElementById('reserve'); 

reserve.addEventListener('submit', function(e) {
  
 
//Variables
  e.preventDefault();
  const first = document.getElementById('first'); 
  const last = document.getElementById('last');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const conditions = document.getElementById('checkbox1');
  console.log(conditions.checked)
  const myError = document.getElementById('error');
  const myError1 = document.getElementById('error1');
  const myError2 = document.getElementById('error2');
  const myError3 = document.getElementById('error3');
  const myError4 = document.getElementById('error4');
  //const errorMsg = document.getElementsById('errorMsg');

  let compteur = 0;
  //prenom 
  if (first.value == "") {   
    
    error.textContent = "Veuillez entrer 2 lettres minimum pour le champ du prenom."
    myError.style.color = 'red';  
  }
  else {  
    myError.innerHTML = ""; 
    compteur++ 
  }    
  // nom
  if (last.value == "") {  
    
    error1.textContent = "Veuillez entrer 2 lettres minimum pour le champ du nom."
    myError1.style.color = 'red';
    
  }  
  else {
    myError1.innerHTML = ""; 
    compteur++
  }
  //email
    if (email.value == "") {      
      
      error2.textContent ="Veuillez entrer un email valide."
      myError2.style.color = 'red';
    }  
    else {
     myError2.innerHTML = ""; 
      compteur++
    }
  //Date de naissance- birthdate
  if (birthdate.value == "") {       
    error3.textContent ="Veuillez entrer votre date de naissance."
    myError3.style.color = 'red'; 
  } 
  else {
    myError3.innerHTML = "";
    compteur++ 
  }
  //Tournois -quantity     
  if (quantity.value == "") {       
    error4.textContent ="Vous devez saisir un nombre."
    myError4.style.color = 'red';    
  }  
  else {
   myError4.innerHTML = ""; 
    compteur++
  } //choix de la ville
  if(document.getElementById('location1').checked || document.getElementById('location2').checked || 
    document.getElementById('location3').checked ||document.getElementById('location4').checked||document.getElementById('location5').checked||document.getElementById('location6').checked) {
    compteur++
  } 
  else {

    errorMsg.textContent ="Vous devez saisir une ville."
    errorMsg.style.color = 'red'; 
  }   
 //Conditions et informations. 

 if(!document.getElementById('checkbox1').checked) {   
  errorFinal.textContent = "Veuillez cocher les conditions d'utilisation" 
  errorFinal.style.color = 'red'; 
  }
 else {  
    compteur++    
  } 
  console.log(compteur)
  if (compteur === 7){
   reserve.textContent = "Votre reservation a bien été reçue";
   document.getElementById("reserve").reset();  
   location.reload();

  }
  reserve.addEventListener("click", () => { //msg reussite et fermeture 
   if (reserve.textContent === "Close") {
      if(getComputedStyle(bground).display != "none"){
       bground.style.display = "none";
        // document.getElementById("reserve").reset();
        // location.reload();
  
      } 
  } })
  });

// 1ére méthode Close Modal

const close = document.getElementById('close');
const bground = document.getElementById('bground');
 
close.addEventListener("click", () => {
  if(getComputedStyle(bground).display != "none"){
   bground.style.display = "none";
  }     
});








