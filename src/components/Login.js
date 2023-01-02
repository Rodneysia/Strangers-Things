import React, {useState} from 'react';


const Login = (props) => {
    const tokenToUser = props.tokenToUser;
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
  

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
        if(!result.success){
          throw result.error;
        }
        const token = result.data.token;
        window.localStorage.setItem('token', token);
        tokenToUser();
      })
      .catch(err => console.log(err));
    }
    

  return (
    <>
     
    <h1>
       Login
   </h1> 
   <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label> 
      <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"></input>

      <label htmlFor="password">Password</label> 
      <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"></input> 

      <button type="submit">Login</button>
   </form>
        
   </>
  )
}

export default Login
