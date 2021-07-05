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

//ici commence l'excercise appelé par id sur le form)

// const form = document.getElementById("reserve") 
// document.getElementById("reserve").addEventListener("submit", function(e) {
//  e.preventDefault();
//    alert('Merci! Votre réservation a été reçue.');
//  });
let reserve = document.getElementById('reserve'); //on fait reserve et on rajoute un événement et 
//serà à la sumision de formulaire qu on voudra declencher une fonction et cette fonction on va lui passer l'événement en question
 
reserve.addEventListener('submit',function(e) {
  // Variables--//creation des variables et recuperations d'elles mêmes par document.get et son Id.
  // ceci permet de récuperer le formulaire
  let first = document.getElementById('first'); 
  let last = document.getElementById('last');
  let email = document.getElementById('email');
  let birthdate = document.getElementById('birthdate');
  let quantity = document.getElementById('quantity');

  //Tournois -quantity - 
  //récuperation de notre input / on va le faire à l'interieur de la fonction. Maintenant on
  // fera une condition if
  // si my input .value est égal à rien de tout, ça veut dire qu'elle est vide et dans ce ca là
  // on ferait un epreventdefault. Et on arrete la soumission sinon on continue et sera envoyé au serveur. 
  
  if (quantity.value == "") {    
    let myErreur4 = document.getElementById('erreur4');
    myErreur4.innerHTML = "Vous devez saisir un nombre."; 
    myErreur4.style.color = 'red';
    e.preventDefault(); //creation d'une variable et recuperation de la même par document.get et son Id. ceci permet de récuperer le formulaire
  }  

  //Date de naissance- birthdate
  if (birthdate.value == "") {    
    let myErreur3 = document.getElementById('erreur3');
    myErreur3.innerHTML = "Vous devez entrer votre date de naissance."; 
    myErreur3.style.color = 'red'; 
    // e.preventDefault();
  }  
  
  //email
  if (email.value == "") {    
    let myErreur2 = document.getElementById('erreur2');
    myErreur2.innerHTML = "Veuillez entrer un email valide."; 
    myErreur2.style.color = 'red';
    //e.preventDefault();
  }  

 // nom
 if (last.value == "") {    
    let myErreur1 = document.getElementById('erreur1');
    myErreur1.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; // on fait un innerhtml pour ajoter un msg erreur
    myErreur1.style.color = 'red'; // on ajoute un style
    //e.preventDefault();
  }  

 // prenom
  if (first.value == "") {     //on va récuperer mon div erreur créé 
    let myErreur = document.getElementById('erreur');
    myErreur.innerHTML = "Veuillez entrer 2 lettres minimum pour le champ du prenom."; // on fait un innerhtml pour ajouter un msg erreur
    myErreur.style.color = 'red'; // on ajoute un style
    // e.preventDefault();
  }

});

const form = document.getElementById("reserve") 
document.getElementById("reserve").addEventListener("submit", function(e) {
 e.preventDefault();
   alert('Merci! Votre réservation a été reçue.');
 });

//valider input radio option 1
// function validate(){
//   let valid = false;
//   let ville = document.form.location;
//   for (let i = 0; i < length; i++){
//     if(x[i].checked) {
//       valid = true;
//       break;
//     }
//   }
//   if(valid) {
//     alert("Vous avez choisi une ville");
//    //erreur = "validé"
//   }
//   else {
//     alert("Veuillez selectionner une ville");
//     //erreur = "Veuillez selectionner une ville"
//     return false;
//   }

// }
//option 2
function validate(){
  let valid = false;
  let ville = document.form.location;
  for (let i = 0; i < ville.length; i++){
    if(ville[i].checked == true) 
    return true;
  }
  document.getElementById("erreurcheck").innerHTML = "Veuillez choisir une ville"; //il a été créee ce div mais pas sur de la position
  return false; 
}
 

// validation input check


//function fermeture modal

// document.addEventListener(
//   "click",
//   function(event) {
//     if (
//       event.target.matches(".close") ||
//       !event.target.closest(".content")
//     ) {
//       closeModal()
//     }
//   },
//   false
// )

// function closeModal() {
//   document.querySelector(".content").style.display = "none"
// }



//Variables
// let erreur;
// let first = document.getElementById("first");
// let last = document.getElementById("last");
// let email = document.getElementById("email");
// let birthdate = document.getElementById("birthdate");
// let quantity = document.getElementById("quantity");

// function validate(){
//   document.getElementById("reserve").addEventListener("submit", function(e) {
//     e.preventDefault();   
    
    //Conditions
    
//     if (!quantity.value) {
//       erreur = "Pour le nombre de concours, une valeur numérique est necessaire.";
     
//     }
//     if (!birthdate.value) {
//       erreur = "Vous devez entrer votre date de naissance";
      
//      }
//     if (!email.value) {
//      erreur = "Veuillez renseigner un email";   
      
//     }
//     if (!last.value) {
//       erreur = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    
//     }
//     if (!first.value) {
//       erreur = "Veuillez entrer 2 caractères ou plus pour le champ du prenom.";
     
//      }
//     if (erreur) {
//       e.preventDefault();
//      document.getElementById("erreur").innerHTML = erreur;
//       return false;
//     }  else {
//     // alert('Merci! Votre réservation a été reçue.');
//     }  
//   });
// }