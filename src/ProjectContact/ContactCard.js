import React, { useCallback, useState } from 'react';

export default function ContactCard({ contact }) {
  const { name, username, email, phone, website, address, company } = contact;
  const [showDetails, setShowDetails] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleCompanyDetails = useCallback(() => {
    setShowDetails(true);
    setShowUserDetails(false);
  }, []);

  const handleUserDetails = useCallback(() => {
    setShowUserDetails(true);
    setShowDetails(false);
  }, []);

  const CompanyDetails = useCallback(() => {
    if (showDetails) {
      return (
        <div>
          <p>Company Name: {company.name}</p>
          <p>Details: {company.catchPhrase}</p>
          <p>Company Industry: {company.bs}</p>
        </div>
      );
    }
    return null;
  }, [showDetails, company]);

  const UserDetails = useCallback(() => {
    if (showUserDetails) {
      return (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address.city}</p>
        </div>
      );
    }
    return null;
  }, [showUserDetails, name, email, phone]);

  return (
    <div>
      <h2>Username: {username}</h2>
      <h4>Company: {company.name}</h4>
      <button onClick={handleCompanyDetails}>Company details</button>
      <button onClick={handleUserDetails}>User details</button>
      <CompanyDetails />
      <UserDetails />
    </div>
  );
}