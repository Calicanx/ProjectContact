import React, { useCallback, useState } from 'react';
import './project.css'

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
          <p><span className='companyname'>Company Name:</span> {company.name}</p>
          <p><span className='companyname'>Details:</span> {company.catchPhrase}</p>
          <p><span className='companyname'>Company Industry:</span> {company.bs}</p>
        </div>
      );
    }
    return null;
  }, [showDetails, company]);

  const UserDetails = useCallback(() => {
    if (showUserDetails) {
      return (
        <div>
          <p><span className='username1'>Name:</span> {name}</p>
          <p><span className='username1'>Email:</span> {email}</p>
          <p><span className='username1'>Phone:</span> {phone}</p>
          <p><span className='username1'>Address:</span> {address.city}</p>
        </div>
      );
    }
    return null;
  }, [showUserDetails, name, email, phone, address]);

  return (
    <div>
      <h2 className='username'><span className='sp'>Username:</span> {username}</h2>
      <h2 className='company'><span className='sp'>Company:</span> {company.name}</h2>
      <button className='contactbtn' onClick={handleCompanyDetails}>Company details</button>
      <button className='contactbtn'onClick={handleUserDetails}>User details</button>
      <CompanyDetails />
      <UserDetails />
    </div>
  );
}