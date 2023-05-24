import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import ContactH from './ContactH';
import './project.css'


export default function ProjectContact(){
    const [id, setid] = useState(['']);
    const [password, setpassword] = useState(['']);
    const [error, setError] = useState(null);
    const [status, setstatus] = useState(false);
    const [contacts, setContacts] = useState(['']);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setContacts(data))
          .catch(error => console.error(error));
      }, []);
      
    if (status === true){
        return(
            <>
                <ContactH/>
                <ContactList contacts={contacts} />
            </>
        )
    }
    async function Login(e) {
        e.preventDefault();
        setstatus(false);
        try {
          await submitForm(id, password);
          setstatus(true);
        } catch (err) {
          setstatus(false);
          setError(err);
        }
      };

    return(
      <div className='row'>
        <div className='col-12 center'>
          <h1 className='lh'>LOGIN TO VIEW COMPANY DIRECTORY</h1>
        </div>
          <div className='center col-12'>
              <form onSubmit={Login} className='form1'>
                  <p className='label'>Username:</p>
                  <input type='text' value={id} onChange={e => setid(e.target.value)} placeholder='Username'></input>
                  <br/>
                  <p className='label'>Password:</p>
                      <input type='password' value={password} onChange={e => setpassword(e.target.value)} placeholder='Password'></input>
                      <br/>
                      <button className='submit'>Log In</button>
                  </form>
                  {error !== null && <p> {error.message}</p>}        
          </div>
        </div>
    )
        }

function submitForm(id, password) {
    return new Promise((resolve, reject) => {
        let shouldError = id !== 'test' && password !== 123
        if (shouldError) {
          reject(new Error('Wrong Password/Username'));
        } else {
          resolve();
        }
    });
  }
