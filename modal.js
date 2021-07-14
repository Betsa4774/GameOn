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

// Pattern des différents types 
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

formData.forEach((input)=> input.addEventListener('change', getDataInput));
function getDataInput (event){
  console.log(event.target.value);

  if(event.target.id === 'first'&& event.target.value.match(textFormat)){
    first.style.border = "2px green solid";
    myError.innerHTML = "";
    console.log("c'est green");
  }else {
    myError.innerHTML = "Veuillez entrer 2 lettres minimum pour le prenom."; 
    myError.style.color = 'red';
    first.style.border = "2px red solid"; 
  }

  if(event.target.id === 'last'&& event.target.value.match(textFormat)){
    last.style.border = "2px green solid";
    myError1.innerHTML = "";
    console.log("c'est green");
  }else {
    myError1.innerHTML = "Veuillez entrer 2 lettres minimum pour le nom."; 
    myError1.style.color = 'red';
    last.style.border = "2px red solid"; 
  }

  if(event.target.id === 'email'&& event.target.value.match(emailFormat)){
    email.style.border = "1px green solid";
    myError2.innerHTML = "";
    console.log("c'est green");

  }else {
    myError2.innerHTML = "Veuillez entrer un email valide."; 
    myError2.style.color = 'red';
    email.style.border = "2px red solid"; 
  }

  if(event.target.id === 'birthdate'&& event.target.value.match(dateFormat)){
    birthdate.style.border = "2px green solid";
    myError3.innerHTML = "";
    console.log("c'est green");

  }else {
    myError3.innerHTML = "Veuillez entrer votre date de naissance."; 
    myError3.style.color = 'red';
    birthdate.style.border = "2px red solid"; 
  }

  if(event.target.id === 'quantity'&& event.target.value.match(numberFormat)){
    quantity.style.border = "2px green solid";
    myError4.innerHTML = "";
    console.log("c'est green");

  }else {
    myError4.innerHTML = "Veuillez saisir un numéro."; 
    myError4.style.color = 'red';
    quantity.style.border = "2px red solid"; 
  }

  if(event.target.name === 'location'){
    
    console.log("telle ville est  "+ event.target.value);
    

  }

}

const reserve = document.getElementById("reserve");
// reserve.textContent = "Votre message a été envoyé" 

const condition = document.getElementById('checkbox1');
const btnValidation = document.getElementById('validation');

  btnValidation.addEventListener("click", (e) =>{
    e.preventDefault();
    first.textContent = " ";
    last.textContent = " ";
    email.textContent = "Votre message est bien envoyé";
    birthdate.textContent = " ";
    quantity.textContent = " ";
    console.log("c'est parti");
      })

 //reserve = document.getElementById('reserve'); 
//  
//reserve.addEventListener('submit',function(e) {
  // Variables
  
 

 
  
 

  // const selectionFinal = new FormData(document.querySelector("form"));
 //reserve.addEventListener('submit',function(e) {
   //e.preventDefault();
  // if (first.value.match(textFormat)) {   
  
  //    first.style.border = " 5px green";
  // }
  // else {
  //   //myError.innerHTML = "";
  //   myError.innerHTML = "Veuillez entrer 2 lettres minimum pour le champ du prenom."; 
  //   myError.style.color = 'red';
  
    
  // }
  // nom
  // if (last.value.match(textFormat)) {  
  //   last.style.border = " 5px green";
  // }  
  // else {
  //   //myError1.innerHTML = "";
  //   myError1.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; 
  //   myError1.style.color = 'red';  
  // }
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
// if (email.value == "") {      
//       myError2.innerHTML = "Veuillez entrer un email valide."; 
//       myError2.style.color = 'red';      
//     }  
 
//----});
// 1ére méthode 

const close = document.getElementById('close');
const bground = document.getElementById('bground');
 
close.addEventListener("click", () => {
  if(getComputedStyle(bground).display != "none"){
   bground.style.display = "none";
  }    
  
})
  

// 2émé méthode -on click 

// const close = document.getElementById("close"); 
// const bground = document.getElementById('bground');

// function closeM(){
//  if(getComputedStyle( bground).display != "none"){
//    bground.style.display = "none";
//   }   
// };
// close.onclick = closeM;









 