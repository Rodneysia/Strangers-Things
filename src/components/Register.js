import React,  {useEffect, useState} from 'react';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
    }


  return (
    <>
    <h1>Register</h1>

     <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input value={name} name="name" id="name" placeholder="Full Name"></input>


      <label htmlFor="email">Email</label> 
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"></input>

      <label htmlFor="password">Password</label> 
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"></input> 

      <button type="submit">Register</button>
   </form>
   <button onClick={() => props.onFormSwitch ('login')}>Already have an account? Login here.</button>

    </>
  )
}

export default Register
