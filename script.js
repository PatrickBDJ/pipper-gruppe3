const myTextArea = document.getElementById('pip-content-modal');

myTextArea.addEventListener('input', () =>{
    myTextArea.value.length;
    document.getElementById("counter-modal").innerHTML = (myTextArea.value.length + " / " + "255 karakterer tilbage");  
});