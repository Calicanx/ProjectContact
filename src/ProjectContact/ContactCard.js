import React, { useCallback, useState } from 'react';
import button from './close.png';
import profilepic from './user.png'
import './project.css'

export default function ContactCard({ contact }) {
  const { name, username, email, phone, website, address, company } = contact;
  const [showDetails, setShowDetails] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleCompanyDetails = () => {
    setShowDetails(false)
    setShowDetails(true);
    setShowUserDetails(false);
  };

  const handleUserDetails = () => {
    setShowUserDetails(true);
    setShowDetails(false);
  };

  const UserDetails = useCallback(() => {
    if (showUserDetails) {
      return (
          <div className='boxshadow'>
            <img src={button} className='x' onClick={() => setShowUserDetails(false)}></img>
            <p><span className='username1'>Name:</span> {name}</p>
            <p><span className='username1'>Email:</span> {email}</p>
            <p><span className='username1'>Phone:</span> {phone}</p>
            <p><span className='username1'>Address:</span> {address.city}</p>
            <p><span className='username1'>Website:</span> <a href={website}>{website}</a></p>
          </div>
      );
    }
   return null;
  }, [showUserDetails, name, email, phone, address, website]);

  const CompanyDetails = useCallback(() => {
    if (showDetails) {
      return (
          <div className='boxshadow'>
            <img src={button} className='x' onClick={() => setShowDetails(false)}></img>     
            <p><span className='companyname'>Company Name:</span> {company.name}</p>
            <p><span className='companyname'>Details:</span> {company.catchPhrase}</p>
            <p><span className='companyname'>Company Industry:</span> {company.bs}</p>
            </div>
      );
    }
    return null;
  }, [showDetails, company]);

  return (
    <div className='row'>
      <div className='col-12'>
        <div className='hq col-6'>
          <img src={profilepic} onClick={handleUserDetails} className='profilep'></img>
          <UserDetails />
          <h2 className='username'>{username.toUpperCase()}</h2>
          <h2 className='company'><span className='sp'>Company:</span> {company.name}</h2>
          <button className='contactbtn' onClick={handleCompanyDetails}>Company details</button>
          <CompanyDetails />
        </div>
        <div className='col-11 fs'></div>
        <div className='col-6 hl'><hr/></div>
      </div>
    </div>

  );
}
