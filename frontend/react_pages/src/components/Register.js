import React, { useState } from 'react';



export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accpetTerms, setAccpetTerms] = useState(false);

    const handleSubmit = e => {
        console.log(`email:${email}
            password:${password}
            accpetTerms:${accpetTerms}`
            
        )
            e.preventDefault();
    }
    



    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
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
           <label >
               Terms
               <input
                    name='accpetTerms'
                    type='checkbox'
                    value={accpetTerms}
                    onChange={e => setAccpetTerms(e.target.value)}
                    required
                    />

           </label>
<br/>
            <button>Submit</button>
            
            </form>
        </div>
    )

}


