import React, { useState } from 'react';
import './login.css'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
            e.preventDefault();
    }
    
console.log(handleSubmit)    

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
            <label>
                Email:
                <input 
                    name='email'
                    type='email'
                    autoFocus
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required/>
            </label>
<br/>
            <label>
                Password:
                <input
                    name='password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required/>
           </label>
<br/>
            <button>Submit</button>
            
            </form>
        </div>
    )

}



