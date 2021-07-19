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

//Pattern des différents types 
let textFormat = /^[a-zA-Z\é\è\-\^\']{2,30}$/; 
let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/; 
let dateFormat = /((?:19|20)[0-9][0-9])-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/; 
let numberFormat = /^[0-9]{1,3}$/;

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

let trueValidation1;
let trueValidation2;
let trueValidation3;
let trueValidation4;
let trueValidation5;
let trueValidation6;

// récupérer les données des input modal event
formData.forEach((input)=> input.addEventListener('change', getDataInput));
function getDataInput (event){
  console.log(event.target.value);
    
  if(event.target.id === 'first'&& event.target.value.match(textFormat)){
    first.style.border = "2px green solid";
    myError.innerHTML = "";
    console.log("c'est green");
    return trueValidation1 = true;
  }else if (event.target.id === "first" && !event.target.value.match(textFormat)) {
    myError.innerHTML = "Veuillez entrer 2 lettres minimum pour le prenom."; 
    myError.style.color = 'red';
    first.style.border = "2px red solid"; 
  }  

  if(event.target.id === 'last'&& event.target.value.match(textFormat)){
    last.style.border = "2px green solid";
    myError1.innerHTML = "";
    console.log("c'est green");
    return trueValidation2 = true;
  }else if (event.target.id === "last" && !event.target.value.match(textFormat)){
    myError1.innerHTML = "Veuillez entrer 2 lettres minimum pour le nom."; 
    myError1.style.color = 'red';
    last.style.border = "2px red solid"; 
  }

  if(event.target.id === 'email'&& event.target.value.match(emailFormat)){
    email.style.border = "2px green solid";
    myError2.innerHTML = "";
    console.log("c'est green");
    return trueValidation3 = true;

  }else if (event.target.id === "email" && !event.target.value.match(emailFormat)) {
    myError2.innerHTML = "Veuillez entrer un email valide."; 
    myError2.style.color = 'red';
    email.style.border = "2px red solid"; 
  }
  
  if(event.target.id === 'birthdate'&& event.target.value.match(dateFormat)){
    birthdate.style.border = "2px green solid";
    myError3.innerHTML = "";
    console.log("c'est green");
    return trueValidation4 = true;

  }else if(event.target.id === 'birthdate'&& !event.target.value.match(dateFormat)){
    myError3.innerHTML = "Veuillez entrer votre date de naissance."; 
    myError3.style.color = 'red';
    birthdate.style.border = "2px red solid"; 
  }

  if(event.target.id === 'quantity'&& event.target.value.match(numberFormat)){
    quantity.style.border = "2px green solid";
    myError4.innerHTML = "";
    console.log("c'est green");
    return trueValidation5 = true;

  }else  if(event.target.id === 'quantity'&& !event.target.value.match(numberFormat))  {
    myError4.innerHTML = "Veuillez saisir un numéro."; 
    myError4.style.color = 'red';
    quantity.style.border = "2px red solid"; 
  }
  if (event.target.id === "checkbox1") {

    if (!event.target.checked) {
      event.target.value = "off";
      console.log(event.target.value);
      return trueValidation6 = false;
    }
    else if (event.target.checked) {
      event.target.value = "ok";
      console.log(event.target.value);
      errorFinal.textContent = " ";
      return trueValidation6 = true;
    }
  }
}

const inputsRecuperation = document.querySelectorAll('input[required]');
const validation = document.getElementById('validation');
let errorFinal = document.getElementById("errorFinal");

validation.addEventListener("click", function validateData(event) {
  event.preventDefault();
  if (trueValidation6 === false){
    errorFinal.textContent = "Veuillez cocher les conditions";
  }
  if (trueValidation1 === true && trueValidation2 === true && trueValidation3 === true && trueValidation4 === true
    && trueValidation5 === true && trueValidation6 === true) {
    console.log("c'est parti");
    messageReussite.textContent = "Votre réservation à été bien recue. Fermez la modal";

    }
  })
// for (let inputRequired of inputsRecuperation){

// if (inputRequired.style.border === "2px red solid"){
//   console.log("il y a du rouge");
//   // errorFinal.textContent ="Erreur dans la saisie";
//   // inputRequired.after(infoRed);
//   // alert("");
// } else if (inputRequired.style.border === "2px green solid" && inputRequired.style.border === "2px red solid"){
//   console.log("il y a un problème");
//   alert("Une ou plusieurs saisies ne sont pas bonne");
// } else if (inputRequired.style.border === ""){
//   console.log("il y a un second problème");
//   // errorFinal.textContent ="Le champs est vide";
//   // inputRequired.after(infoEmpty);
// } else if (inputRequired.style.border === "2px green solid"){
//   console.log("c'est validé");
// }
// // console.log(inputRequired.style.border);
// }
// })

// document.getElementById("validation").addEventListener("click", function(e) {
//   e.preventDefault();
// 	let errorFinal;
//    	var inputs = this.getElementsByTagName("input");
 
// 	for (var i = 0; i < inputs.length; i++) {
// 		// console.log(inputs[i]);
// 		if (!inputs[i].value) {
// 			errorFinal = "Veuillez renseigner tous les champs";
// 		}
// 	}
 
// 	if (errorFinal) {
		
// 		document.getElementById("errorFinal").innerHTML = errorFinal;
// 		return false;
// 	} else {
// 		//alert('Merci! Votre réservation a été reçue.');
//     console.log("Merci votre réservation a été reçue");
// 	}
 
 
// });
// const reserve = document.getElementById("reserve");
// // reserve.textContent = "Votre message a été envoyé" 

// const btnValidation = document.getElementById('validation');

//   btnValidation.addEventListener("click", (e) =>{
//     e.preventDefault();
//     first.textContent = " ";
//     last.textContent = " ";
//     email.textContent = "";//Votre message est bien envoyé
//     birthdate.textContent = " ";
//     quantity.textContent = " ";
//     console.log("c'est parti");
//       })

  
      // function validate(){
      //   // si la valeur du champ prenom est non vide
      //   if(document.formSaisie.reserve.value!= "") {
      //     // les données sont ok, on peut envoyer le formulaire    
      //     return true;
      //   }
      //   else {
      //     // sinon on affiche un message
      //     alert("Saisissez les champs vides");
      //     // et on indique de ne pas envoyer le formulaire
      //     return false;
      //   }
      // }

// 1ére méthode 

const close = document.getElementById('close');
const bground = document.getElementById('bground');
 
close.addEventListener("click", () => {
  if(getComputedStyle(bground).display != "none"){
   bground.style.display = "none";
  }    
  
});


// reserve = document.getElementById('reserve');  
// reserve.addEventListener('submit',function(e) {  
//   e.preventDefault();

//   const first = document.getElementById('first'); 
//   const last = document.getElementById('last');
//   const email = document.getElementById('email');
//   const birthdate = document.getElementById('birthdate');
//   const quantity = document.getElementById('quantity');
  
//   const myError = document.getElementById('error');
//   const myError1 = document.getElementById('error1');
//   const myError2 = document.getElementById('error2');
//   const myError3 = document.getElementById('error3');
//   const myError4 = document.getElementById('error4');

 // const selectionFinal = new FormData(document.querySelector("form"));

 
  // //prenom
  //   if (prenom.value == "") {      
  //     myError.innerHTML = "Veuillez entrer minimum 2 caractères pour le prenom."; 
  //     myError.style.color = 'red';      
  //   }  
  //   else {
  //     myError.innerHTML = ""; 
  //   }
  // }
  // nom
  //   if (nom.value == "") {      
  //     myError1.innerHTML = "Veuillez entrer minimum 2 caractères pour le nom."; 
  //     myError1.style.color = 'red';      
  //   }  
  //   else {
  //     myError1.innerHTML = ""; 
  //   }
  // //email
  //   if (email.value == "") {      
  //     myError2.innerHTML = "Veuillez entrer un email valide."; 
  //     myError2.style.color = 'red';      
  //   }  
  //   else {
  //     myError2.innerHTML = ""; 
  //   }
  // //Date de naissance- birthdate
  // if (birthdate.value == "") {      
  //   myError3.innerHTML = "Vous devez entrer votre date de naissance."; 
  //   myError3.style.color = 'red'; 
  // } 
  // else {
  //   myError3.innerHTML = ""; 
  // }
  // //Tournois -quantity     
  // if (quantity.value == "") {        
  //   myError4.innerHTML = "Vous devez saisir un nombre."; 
  //   myError4.style.color = 'red';    
  // }  
  // else {
  //   myError4.innerHTML = ""; 
 // } //choix de la ville


  //if(document.getElementById('location').checked) {
    //document.getElementById("errormsg").innerHTML
    //= document.getElementById("location1").value;
    //console.log("c'est checked");
  
  //}
  // else if(document.getElementById('location2').checked) {
  //   document.getElementById("errormsg").innerHTML
  //   = document.getElementById("location2").value;  
  // }
  // else if(document.getElementById('location3').checked) {
  //   document.getElementById("errormsg").innerHTML
  //   = document.getElementById("location3").value;
  // }
  // else if(document.getElementById('location4').checked) {
  //   document.getElementById("errormsg").innerHTML
  //   = document.getElementById("location4").value;
  // }
  // else if(document.getElementById('location5').checked) {
  //   document.getElementById("errormsg").innerHTML
  //   = document.getElementById("location5").value;
  // }
  // else if(document.getElementById('location6').checked) {
  //   document.getElementById("errormsg").innerHTML
  //   = document.getElementById("location6").value;
  // }
  // else {
  //   document.getElementById("errormsg").innerHTML
  //   = "Veuillez selectionner une ville";
  // }
      
  //   //Conditions et informations
  //  if (!document.getElementsById('checkbox1').checked) {
  //   document.getElementById("errorMessage").innerHTML
  //   = document.getElementById("checkbox1").value;
  // }  
// 
 
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








