import React from 'react';
import ContactCard from './ContactCard';
import ProjectContact from './PojectContact';
function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map(contact => (
        <>
        <ContactCard key={contact.id} contact={contact} />
        </>
      ))}
    </div>
  );
}

export default ContactList;