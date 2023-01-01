import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './components/Register';
import Login from './components/Login';




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
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} tokenToUser={tokenToUser}/> : <Register onFormSwitch={toggleForm} />
      }
    <h1>
      Posts
    </h1>
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
    
    <App />
   
  </React.StrictMode>

);

export default App