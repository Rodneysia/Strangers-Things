import React, {useState} from 'react';
import { Navigate } from "react-router-dom";


const Login = () => {
    const [token, setToken] = useState(''); 
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [userIsActive, setUserIsActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
  
    if (userIsActive) {
      return <Navigate to="/posts"/>
    } 
    const handleSubmit = (e) => {
    e.preventDefault();
    
        fetch ('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/users/login' , {
  
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    },
        body: JSON.stringify({
          user : {
            username: loginEmail,
            password: loginPassword,
          }
        }),
      }).then(response => response.json())
      .then(result => {
        console.log(result);
        if(!result.success){
          setErrorMessage('Invalid email or password. Please try again');
          throw result.error;
         
        } 
        setToken(result.data.token);
        setUserIsActive(true);
        
      })
      .catch(err => console.log(err));
     

    }
  
  return (
    <>
    {errorMessage && (
       <p> {errorMessage} </p>
)}
    <h1>Login</h1>
   <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label> 
      <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"></input>

      <label htmlFor="password">Password</label> 
      <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"></input> 

      <button className="btn" type="submit" >Login</button>
   </form>
    
  
   </>
  )
}

export default Login
