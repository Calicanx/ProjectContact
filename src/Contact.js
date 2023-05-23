import { useState } from 'react';
import ProjectContact from './ProjectContact/PojectContact'

export default function ContactLogin(){
    const [id, setid] = useState(['']);
    const [password, setpassword] = useState(['']);
    const [error, setError] = useState(null);
    const [status, setstatus] = useState(['']);

    if (status === 'LoggedIn'){
        return(
            <>
            <ProjectContact/>
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
        <div>
            <form onSubmit={Login}>
                <label>Username:{' '}
                <input type='text' value={id} onChange={UsernameIput} placeholder='Username'></input>
                </label>
                <br/>
                <label>Password:{' '}
                    <input type='password' value={password} onChange={PasswordInput} placeholder='Password'></input>
                </label>
                <br/>
                    <button>Submit</button>
                </form>
                {error !== null && <p> {error.message}</p>}        
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