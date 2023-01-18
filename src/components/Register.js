import React, {useState} from 'react';
import { Navigate } from "react-router-dom";

const Register = (props) => {
  console.log("from register", props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userIsRegistered, setUserIsRegistered] = useState(false);
  
    if (userIsRegistered) {
      return <Navigate to="/posts"/>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
       
        fetch ('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/users/register' , {
  
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    },
        body: JSON.stringify({
          user : {
            username: email,
            password: password,
          }
        }),
      }).then(response => response.json())
      .then(result => {
        console.log(result);
        setUserIsRegistered(true);
      })
      .catch(console.error);
   
    }

   
  return (
    <>
    <h1>Register</h1>

     <form onSubmit={handleSubmit}>
    
      <label htmlFor="email">Email</label> 
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="youremail@email.com" required id="email" name="email"></input>

      <label htmlFor="password">Password</label> 
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" minLength={8} required placeholder="password"  id="password" name="password"></input> 

      <button className="btn" type="submit">Register</button>
   </form>
   
  
    </>
  )
}

export default Register
