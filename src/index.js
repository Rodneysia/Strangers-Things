import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';


const App = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);
    const [currentForm, setCurrentForm] = useState('login');
    

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  
    //console.log('posts', posts);

    useEffect(() => {
      const fetchPosts = async () => {
        const resp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts/')
       .then ( (resp) => resp.json () )
       
      // console.log('resp:', resp);
       setPosts(resp.data.posts);
       

      }
      fetchPosts();
    }, []);

  return <>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
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
    <Create />
  </React.StrictMode>

);

export default App