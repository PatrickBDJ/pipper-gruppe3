window.addEventListener("load", async () => {
  clearForm();
  clearUpdateForm();
  // Get data from backend
  const data = await getData();
  console.log(data);
  // Display each of the data elements.
  data.forEach((contact) => {
    const newNode = createContactElement(contact);
    displayNewNode(newNode);
  });
});
