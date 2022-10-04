const form = document.querySelector("#new-contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const contact = {
    name: document.querySelector("#name").value,
    surname: document.querySelector("#surname").value,
    company: document.querySelector("#company").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
  };

  const response = await postData(contact);

  if (response.status === 200) {
    const body = await response.json();
    contact.id = body.name;
    clearForm();
    const newNode = createContactElement(contact);
    displayNewNode(newNode);
  }
});

/**
 * Append node as child in the Contact List html element
 * @param newNode
 */
function displayNewNode(newNode) {
  const contactsList = document.querySelector(".contact-list");
  contactsList.appendChild(newNode);
}

/**
 * Function to clear the form
 */
function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#surname").value = "";
  document.querySelector("#company").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#email").value = "";
}
