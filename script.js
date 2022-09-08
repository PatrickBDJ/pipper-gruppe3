const myTextArea = document.getElementById('pip-content-modal');

myTextArea.addEventListener('input', () =>{
    myTextArea.value.length;
    document.getElementById("counter-modal").innerHTML = (myTextArea.value.length + " / " + "255 karakterer tilbage");  
});
const myTextArea1 = document.getElementById('pip-content');

myTextArea1.addEventListener('input', () =>{
    myTextArea.value.length;
    document.getElementById("counter-content").innerHTML = (myTextArea1.value.length + " / " + "255 karakterer tilbage");  
});