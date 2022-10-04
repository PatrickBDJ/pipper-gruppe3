/**
 * Takes a clone of the template, and fills the information from the Contact object,
 * into the template.
 * @param {object} contact
 * @returns {HTMLElement} Template with contact information
 */
function createContactElement(contact) {
  console.log(contact);
  // Get the template
  const template = document.querySelector("#contact-card");
  // Clone template
  const clone = document.importNode(template.content, true);
  // Fill information into the cloned templated
  clone.querySelector("#temp").id = contact.id;
  clone.querySelector("#name").textContent = contact.name;
  clone.querySelector("#surname").textContent = contact.surname;
  clone.querySelector("#company").textContent = contact.company;
  clone.querySelector("#phone").textContent = contact.phone;
  clone.querySelector("#email").textContent = contact.email;

  // Add on click listener for button
  const button = clone.querySelector("#edit-button");
  button.addEventListener("click", () => {
    editFunction(contact);
  });

  // Return the filled node
  return clone;
}

function editFunction(contact) {
  console.log("Hej fra Edit Function", contact);
  document.querySelector("#update-name").value = contact.name;
  document.querySelector("#update-surname").value = contact.surname;
  document.querySelector("#update-company").value = contact.company;
  document.querySelector("#update-phone").value = contact.phone;
  document.querySelector("#update-email").value = contact.email;
  document.querySelector("#id-temp").innerHTML = contact.id;
}
