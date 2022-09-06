const myTextArea = document.getElementById('pip-content-modal');

myTextArea.addEventListener('input', () =>{
    myTextArea.value.length;
    console.log(myTextArea.value.length);
    // console.log('got input!');
    document.getElementById("counter-modal").innerHTML = (myTextArea.value.length + " / " + "255 karakterer tilbage");  
});