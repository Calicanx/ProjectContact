import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import './project.css'


export default function ProjectContact2(){
    const [id, setid] = useState(['']);
    const [password, setpassword] = useState(['']);
    const [error, setError] = useState(null);
    const [status, setstatus] = useState(['']);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setContacts(data))
          .catch(error => console.error(error));
      }, []);


    if (status === 'LoggedIn'){
        return(
            <>
            <div>
                <ContactList contacts={contacts} />
            </div>
            </>
        )
    }

    function UsernameIput(e){
        setid(e.target.value);
    }

    function PasswordInput(e){
        setpassword(e.target.value)
    }

    async function Login(e) {
        e.preventDefault();
        setstatus('submitting');
        try {
          await submitForm(id, password);
          setstatus('LoggedIn');
        } catch (err) {
          setstatus('NotLogged');
          setError(err);
        }
      }
    return(
      <div className='row'>
          <div className='center col-12'>
              <form onSubmit={Login} className='form1'>
                  <p className='label'>Username:</p>
                  <input type='text' value={id} onChange={UsernameIput} placeholder='Username'></input>
                  <br/>
                  <p className='label'>Password:</p>
                      <input type='password' value={password} onChange={PasswordInput} placeholder='Password'></input>
                      <br/>
                      <button className='submit'>Submit</button>
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