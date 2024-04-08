// Task 1: Fetch Contacts JSON Data.
// Create a function named “getContacts”. You can keep the function body empty for now.
// Inside the getContacts function use the fetch api to load the contacts.json file.
function getContacts() {
  fetch('public/data/contacts.json')
      .then(response => response.json())
      .then(data => renderContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
}
// Call the getContacts function to load the json data.
getContacts();
// all your render function and pass the contacts data to the render function you will create in the next Task.


// Task 1: Render the JSON Data
// 1.	Create a function named "renderContacts". The template for the data is inside the index.js file. Use this template to add the email and name properties from the json data objects.
// •	Select the element in the index.html document with the id of “contacts”. This is where you will display the contacts.
// •	Set the innerHTML of the div element to an empty string .
// •	Render the contact data using the display templating technique. Loop through each one of the contacts and seed the template with the name and email properties. Your final output should look like the image below.
// •	Make sure to call the renderContacts function from the getContacts() function and pass along the array of contacts from getContacts to the renderContacts() method.

function renderContacts(contacts) {
  
  const contactsElement = document.getElementById('contacts');
  
  
  contactsElement.innerHTML = '';
  
  /*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/
  contacts.forEach(contact => {
    contactsElement.innerHTML += `
    <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${contact.name}</h5>
    </div>
     <small>${contact.email}<</small>
  </div>
    `;
  });
}
