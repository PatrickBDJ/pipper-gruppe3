// pip i modal tæller
const myTextArea = document.getElementById("pip-content-modal");

myTextArea.addEventListener("input", () => {
  myTextArea.value.length;
  document.getElementById("counter-modal").innerHTML =
    myTextArea.value.length + " / " + "255 karakterer tilbage";
});

// pip tæller
const myTextArea1 = document.getElementById("pip-content");

myTextArea1.addEventListener("input", () => {
  myTextArea.value.length;
  document.getElementById("counter-content").innerHTML =
    myTextArea1.value.length + " / " + "255 karakterer tilbage";
});

// Ny pip
const form = document.querySelector("#form-id");
const template = document.querySelector("#new-pip");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = new FormData(form);
  console.log("Titel: ", input.get("pip-name"));
  console.log("Besked: ", input.get("pip-content"));

  // Send pip form data
  const http = new XMLHttpRequest();
  http.open("POST", "http://localhost:8000", true);
  // http.setRequestHeader()
  http.send(JSON.stringify({
    "username": input.get("pip-name"),
    "message": input.get("pip-content"),
  }));

  // Send modal pip form data
  const httpModal = new XMLHttpRequest();
  httpModal.open("POST", "http://localhost:8000", true);
  httpModal.send(JSON.stringify({
    "username": input.get("pip-name-modal"),
    "message": input.get("pip-content-modal"),
  }));


  
  const newNode = document.importNode(template.content, true);
  newNode.querySelector("h1").textContent = input.get("pip-name");
  newNode.querySelector("p").textContent = input.get("pip-content");
  document.querySelector("#all-new-notes").prepend(newNode);
});

// Ny pip i modal
const form1 = document.querySelector("#form-id-modal");
const template1 = document.querySelector("#new-pip");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const input1 = new FormData(form1);
  console.log("Titel: ", input1.get("pip-name-modal"));
  console.log("Besked: ", input1.get("pip-content-modal"));
  
  const newNode = document.importNode(template1.content, true);
  newNode.querySelector("h1").textContent = input1.get("pip-name-modal");
  newNode.querySelector("p").textContent = input1.get("pip-content-modal");
  document.querySelector("#all-new-notes").prepend(newNode);

  $('#exampleModalCenter').modal('hide')

});




