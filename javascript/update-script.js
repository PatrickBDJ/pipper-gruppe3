const updateForm = document.querySelector("#update-contact-form");

updateForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Hej fra update form");

  const contact = {
    name: document.querySelector("#update-name").value,
    surname: document.querySelector("#update-surname").value,
    company: document.querySelector("#update-company").value,
    phone: document.querySelector("#update-phone").value,
    email: document.querySelector("#update-email").value,
  };

  const id = document.querySelector("#id-temp").innerHTML;
  const response = await putData(id, contact);
  if (response.status === 200) {
    contact.id = id;
    const newNode = createContactElement(contact);
    const oldNode = document.querySelector("#" + id);
    oldNode.parentNode.replaceChild(newNode, oldNode);
  }
});

function clearUpdateForm() {
  document.querySelector("#update-name").value = "";
  document.querySelector("#update-surname").value = "";
  document.querySelector("#update-company").value = "";
  document.querySelector("#update-phone").value = "";
  document.querySelector("#update-email").value = "";
}
