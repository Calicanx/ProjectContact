import React from 'react';
import ContactCard from './ContactCard';
import ContactH from './ContactH'

export default function ContactList({ contacts }) {
  return (
    <>
    <ContactH/>
    <div>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
    </>
  );
}
