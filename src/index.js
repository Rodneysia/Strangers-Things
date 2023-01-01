import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';




const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentForm, setCurrentForm] = useState('login');
    const [user, setUser] = useState({});
    

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  
   const tokenToUser = () => {
    const token = window.localStorage.getItem('token');
    if (token) { 
      fetch ('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/users/me' , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(response => response.json())
      .then(result => {
        const user = result.data;
        setUser(user);
        //console.log(user);
      })
      .catch(console.error);
    }
   };

    useEffect(() => {
      const fetchPosts = async () => {
        const resp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts/')
       .then ( (resp) => resp.json () )
       
      // console.log('resp:', resp);
       setPosts(resp.data.posts);
       
       tokenToUser();

      }
      fetchPosts();
    }, []);

  return <>
   
      <div>
        <Navbar/>
      </div>
     
    {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} tokenToUser={tokenToUser}/> : <Register onFormSwitch={toggleForm} />
      }
    {
        posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))
    }

    </>
  
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router><App /></Router>
    
   
  </React.StrictMode>

);

export default App