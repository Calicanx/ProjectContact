import React from 'react';

export default function ContactCard({ contact }) {
  const { name, username, email, phone, website, address } = contact;

  return (
    <div>
      <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Address:{address}</p>
    </div>
  );
}