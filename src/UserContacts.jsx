import React, { useState, useEffect } from 'react';  //Packages
import './UserContacts.css';                         //CSS

function UserContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')  //API link provided in the question
      .then(response => response.json())                 //Parsed as JSON
      .then(data => setContacts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="user-contacts">
      <h1 className="title">Resonate Solutions' User Contacts</h1>

      <div className="table-responsive">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
           
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                  <button className="update-button">Update</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserContacts;
