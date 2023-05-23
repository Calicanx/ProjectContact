import React, { useCallback, useState } from 'react';
import button from './close.png';
import profilepic from './user.png'
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
          <img src={button} className='x' onClick={closeCompanydetails}></img>     
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
          <img src={button} className='x' onClick={closeUserdetails}></img>
          <p><span className='username1'>Name:</span> {name}</p>
          <p><span className='username1'>Email:</span> {email}</p>
          <p><span className='username1'>Phone:</span> {phone}</p>
          <p><span className='username1'>Address:</span> {address.city}</p>
        </div>
      );
    }
    return null;
  }, [showUserDetails, name, email, phone, address]);

  const closeCompanydetails = useCallback(() => {
    setShowDetails(false);
  })

  const closeUserdetails = useCallback(() => {
    setShowUserDetails(false);
  })

  return (
    <div className='hq'>
      <img src={profilepic} onClick={handleUserDetails} className='profilep'></img>
      <UserDetails />
      <h2 className='username'>{username.toUpperCase()}</h2>
      <h2 className='company'><span className='sp'>Company:</span> {company.name}</h2>
      <button className='contactbtn' onClick={handleCompanyDetails}>Company details</button>
      <CompanyDetails />
    </div>

  );
}