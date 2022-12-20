import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



const App = () => {
  const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log('posts', posts);

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
    <h1>
      Posts
    </h1>
    {
        posts.map(post => (<div key={post.id}>
        <h3>{post.title}</h3>
        <div>{post.description}</div>
      </div>))
    }
    </>
  
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>

);

export default App