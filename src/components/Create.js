import React, { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
  

    const handleSubmit = async (e) => {
     e.preventDefault();
    
      console.log('title, description: ', title, description);
      const respone = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            post:{
                title: title,
                description: description,
            }
        })
      }).then(response => response.json())
        .then(result => {
         console.log(result);
        })
        .catch(console.error);
    }
  return (
    <>
      <div>
      Create a Post
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title} onChange= 
        {(e) => setTitle(e.target.value)}></input>

        <input type="text" placeholder="description" value={description} onChange=
        {(e) => setDescription(e.target.value)}></input>

        <button className="btn" type="submit">Submit</button>
      </form>

    </>
  )
}

export default Create

