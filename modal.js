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
 reserve = document.getElementById('reserve'); //on fait reserve et on rajoute un événement et 
//serà à la sumision de formulaire qu on voudra declencher une fonction et cette fonction on va lui passer l'événement en question
 
reserve.addEventListener('submit',function(e) {
  // Variables--//creation des variables et recuperations d'elles mêmes par document.get et son Id.
  // ceci permet de récuperer le formulaire
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
  //On fera une condition. Si l'input .value est égal à rien de tout, donc elle est vide et dans ce cas là, on ferait un epreventdefault. Et on arrete la soumission sinon on continue et sera envoyé au serveur. 

  if (first.value == "") {   
    myError.innerHTML = "Veuillez entrer 2 lettres minimum pour le champ du prenom."; 
    myError.style.color = 'red';
    //myErreur.font-size = 1em  
  }
  else {
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
    document.getElementById("errormsg").innerHTML
    = document.getElementById("location1").value;
  }
  else if(document.getElementById('location2').checked) {
    document.getElementById("errormsg").innerHTML
    = document.getElementById("location2").value;  
  }
  else if(document.getElementById('location3').checked) {
    document.getElementById("errormsg").innerHTML
    = document.getElementById("location3").value;
  }
  else if(document.getElementById('location4').checked) {
    document.getElementById("errormsg").innerHTML
    = document.getElementById("location4").value;
  }
  else if(document.getElementById('location5').checked) {
    document.getElementById("errormsg").innerHTML
    = document.getElementById("location5").value;
  }
  else if(document.getElementById('location6').checked) {
    document.getElementById("errormsg").innerHTML
    = document.getElementById("location6").value;
  }
  else {
    document.getElementById("errormsg").innerHTML
    = "Veuillez selectionner une ville";
  }  //Conditions et informations

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
//   else
//    {
// alert('Merci! Votre réservation a été reçue.');
//     } 

 
  
//     if (erreur) {
//       e.preventDefault();
//      document.getElementById("erreur").innerHTML = erreur;
//       return false;
//     }  else {
//     // alert('Merci! Votre réservation a été reçue.');
//     } 


 });



// validation input check


//function fermeture modal




 