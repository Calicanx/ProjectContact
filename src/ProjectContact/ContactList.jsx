import React from 'react';
import ContactCard from './ContactCard';

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
