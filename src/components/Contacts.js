import React from "react";
import "../App.css";

const Contacts = (props) => {
  return (
    <table className="main-table">
      <div>
        <tr class = "container">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </div>
      <div>
        {props.contacts.map((contact) => (
          <tr class ="container2" key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt="img" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>
              <button onClick={() => props.deleteCt(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </div>
    </table>
  );
};


export default Contacts;