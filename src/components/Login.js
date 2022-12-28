import React,  {useEffect, useState} from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(email, password);
    }

  return (
    <>

    <h1>
       Login
   </h1> 
   <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label> 
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"></input>

      <label htmlFor="password">Password</label> 
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"></input> 

      <button type="submit">Login</button>
   </form>
        <button onClick={() => props.onFormSwitch('register')}>New Users Register here</button>
   </>
  )
}

export default Login
