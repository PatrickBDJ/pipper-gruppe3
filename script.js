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
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hi", event);
  const formTitel = document.querySelector("#pip-name").value;
  const formText = document.querySelector("#pip-content").value;
  console.log("Titel: ", formTitel);
  console.log("Besked: ", formText);
  fillTemplate(formTitel, formText);
});

function fillTemplate(formTitel, formText) {
  const template = document.querySelector("#new-pip");
  const newNode = document.importNode(template.content, true);
  newNode.querySelector("h1").textContent = formTitel;
  newNode.querySelector("p").textContent = formText;
  document.querySelector("#all-new-notes").appendChild(newNode);
}

// Ny pip i modal
const form1 = document.querySelector("#form-id-modal");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hi", event);
  const formTitel1 = document.querySelector("#pip-name-modal").value;
  const formText1 = document.querySelector("#pip-content-modal").value;
  console.log("Titel: ", formTitel1);
  console.log("Besked: ", formText1);
  fillTemplate(formTitel1, formText1);
});

function fillTemplate(formTitel, formText) {
  const template = document.querySelector("#new-pip");
  const newNode = document.importNode(template.content, true);
  newNode.querySelector("h1").textContent = formTitel;
  newNode.querySelector("p").textContent = formText;
  document.querySelector("#all-new-notes").appendChild(newNode);
}
