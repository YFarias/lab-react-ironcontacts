import React, { useState } from "react";
import Contacts from "./components/Contacts";
import contactsJSON from "./contacts.json";

import "./App.css";

function App() {
  const [contact, setContact] = useState(contactsJSON.slice(0, 5));

  const AddContact = () => {
    const newContact = contactsJSON[Math.floor(Math.random() * contactsJSON.length)];

    const checkIfExists = contact.find((o, i) => {
      if (newContact.id === o.id) {
        return true;
      }
      return false;
    });

    if (checkIfExists === undefined) {
      setContact([...contact, newContact]);
    }
  };

  const sortByName = () => {
    const sortedContacts = contact.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContact([...contact], sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = contact.sort(function (a, b) {
      return b.popularity - a.popularity;
    });

    setContact([...contact], sortedContacts);
  };

  const deleteContact = (id) => {
    const toDeleteIndex = contact.filter((contact) => contact.id !== id);

    setContact(toDeleteIndex);
  };
  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>
      <div className="btn-area">
        <button onClick={() => AddContact()} className="addContact">
          Add Contact
        </button>

        <button onClick={() => sortByName()} className="addContact">
          Sorty By Name
        </button>

        <button onClick={() => sortByPopularity()} className="addContact">
          Sort By Popularity
        </button>
      </div>
      <Contacts deleteCt={deleteContact} contacts={contact} />
    </div>
  );
}

export default App;
