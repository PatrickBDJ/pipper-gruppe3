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

// pip edit tæller
const myTextArea2 = document.getElementById("edit-message");

myTextArea2.addEventListener("input", () => {
  myTextArea.value.length;
  document.getElementById("counter-edit").innerHTML =
    myTextArea2.value.length + " / " + "255 karakterer tilbage";
});

// Ny pip
const form = document.querySelector("#form-id");
const template = document.querySelector("#new-pip");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = new FormData(form);
/*   console.log("Titel: ", input.get("pip-name"));
  console.log("Besked: ", input.get("pip-content")); */

  // Send pip form data
  const http = new XMLHttpRequest();
  http.open("POST", "http://localhost:8000", true);
  http.send(JSON.stringify({
    "username": input.get("pip-name"),
    "message": input.get("pip-content"),
  }));
  http.onreadystatechange = () => {
    if (http.status==200){
      window.location.reload();
    }
  };
  
  const newNode = document.importNode(template.content, true);
  newNode.querySelector("h1").textContent = input.get("pip-name");
  newNode.querySelector("p").textContent = input.get("pip-content");
  /* console.log(newNode.querySelector("#delete")); */
/*   newNode.querySelector("#delete").addEventListener("click", () => {
    console.log("hello world");
  }); */

  document.querySelector("#all-new-notes").prepend(newNode);
});

// Ny pip i modal
const form1 = document.querySelector("#form-id-modal");
const template1 = document.querySelector("#new-pip");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const input1 = new FormData(form1);
/*   console.log("Titel: ", input1.get("pip-name-modal"));
  console.log("Besked: ", input1.get("pip-content-modal")); */

  // Send pip form data modal
  const http = new XMLHttpRequest();
  http.open("POST", "http://localhost:8000", true);
  http.send(JSON.stringify({
    "username": input1.get("pip-name-modal"),
    "message": input1.get("pip-content-modal"),
  }));
  http.onreadystatechange = () => {
    if (http.status==200){
      window.location.reload();
    }
  };

  const newNode = document.importNode(template1.content, true);
  newNode.querySelector("h1").textContent = input1.get("pip-name-modal");
  newNode.querySelector("p").textContent = input1.get("pip-content-modal");
  document.querySelector("#all-new-notes").prepend(newNode);

  $('#exampleModalCenter').modal('hide')

});


// GET Database
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function fillTemplate(formTitel, formText, id){
  const template = document.querySelector("#new-pip");
  const newNode = document.importNode(template.content, true);
  newNode.querySelector("h1").textContent = formTitel;
  newNode.querySelector("p").textContent = formText;
  const popupText = newNode.querySelector(".popuptext");
  newNode.querySelector(".menu").addEventListener("click", () =>{
  popupText.classList.toggle("show");

  });
  newNode.querySelector("#delete").addEventListener("click", () => {
  const http = new XMLHttpRequest();
    http.open("DELETE", "http://localhost:8000", true);
    http.onreadystatechange = () => {
      if (http.status==200){
        window.location.reload();
      }
    };
    http.send(JSON.stringify({
      "id": id
    }));
  /*   console.log(id); */
  });
  newNode.querySelector("#edit").addEventListener("click", () =>{
/*     console.log("test"); */
/*     console.log(id); */

    document.getElementById("overlay").classList.remove('hide');
    document.querySelector(".edit-id").value = id;
    document.querySelector(".edit-username").value = formTitel;
    document.querySelector(".edit-message").value = formText;

    /* Hide pop-up */
    

  });
  document.querySelector("#edit-btn")["onclick"] = () =>{
  const idEdit = document.querySelector(".edit-id").value;
  const usernameEdit = document.querySelector(".edit-username").value;
  const messageEdit = document.querySelector(".edit-message").value;
/*     console.log(idEdit, usernameEdit, messageEdit); */

    const http = new XMLHttpRequest();
    http.open("PUT", "http://localhost:8000", true);
    http.onreadystatechange = () => {
      if (http.status==200){
        window.location.reload();
      }
    };
    http.send(JSON.stringify({
      "id": idEdit,
      "username": usernameEdit,
      "message": messageEdit
    }));
  };


  document.querySelector("#all-new-notes").appendChild(newNode);  
};

fetch("http://localhost:8000/", requestOptions)
  .then(response => response.json())
  .then(result =>{
    for (const item of result) {
/*       console.log(item.username);
      console.log(item.message); */
/*       console.log(item.id); */
      fillTemplate(item.username, item.message, item.id);
    }
  })
  .catch(error => console.log('error', error));
