import React, {useEffect, useState} from 'react';


const App = () => {
    //console.log(window.location);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
   
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

  

  return <>
     
    
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
  
export default App