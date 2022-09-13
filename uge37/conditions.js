function validateMinimumLength(input){
    const resultat = input.length >= 3;
    // console.log(resultat);
    return resultat;
}

const isValidString = validateMinimumLength("abc");
// console.log(isValidString);


function validateLength(input){
    // Option i for |
    const resultat = input.length >= 3 && input.length <= 8;
    // console.log(resultat);
    return resultat;
}
const isOverEigth = validateLength("abcdedsadsad");


function validateEmail(text){
    const resultat = text.includes("cphbusiness.dk")
    console.log(resultat);
    return resultat;
}

validateEmail