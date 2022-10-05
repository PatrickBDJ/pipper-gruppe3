// Øvelse 1.1
// Lav en funktion,
// der fortæller om en input string er minimum 3 karakterer.
function validateMinimumLength(input){
    const resultat = input.length >= 3;
    // console.log(resultat);
    return resultat;
}

const isValidString = validateMinimumLength("abc");
// console.log(isValidString);


// Øvelse 1.2
// Udvid funktionen med at den maksimum må være 8 karakterer.
function validateLength(input){
    // Option i for |
    const resultat = input.length >= 3 && input.length <= 8;
    // console.log(resultat);
    return resultat;
}
const isOverEigth = validateLength("abcdedsadsad");


// Øvelse 1.3
// Lav en funktion, om en string indeholder "cphbusiness.dk"
function validateEmail(text){
    const resultat = text.includes("cphbusiness.dk")
    // console.log(resultat);
    return resultat;
}

const isCph = validateEmail("cphbusiness.dk");


// Øvelse 1.4
// Lav en funktion om 2 strings matcher.
function matches(text1, text2){
    const resultat = text1 == text2;
    return resultat;
}

matches();


// øvelse 2.1
// Lav en event listener på "submit" og indsamle værdierne.
// const form = document.getElementById("condition-form");
// const input = document.getElementById("condition-input");

// function conditionSubmit(event){
//     event.preventDefault();
//     console.log(input);
    
//   }
  
//   form.addEventListener("submit", conditionSubmit);



// create login projekt

// email
function validateFormEmail(text){
    const formEmailValidation = text.includes("cphbusiness.dk")
    // console.log(resultat);
    return formEmailValidation;
}

const formValidateEmail = validateFormEmail("cphbusiness.dk");

// check length
function validateFormLength(input){
    const formLengthValidation = input.length >= 3 && input.length <= 8;
    // console.log(resultat);
    return formLengthValidation;
}
const formLength = validateFormLength("abcdedsadsad");


// confirm password
function matches(text1, text2){
    const resultat = text1 == text2;
    return resultat;
}

matches();



