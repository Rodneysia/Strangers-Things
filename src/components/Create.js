import React, { useState } from 'react'


const Create = ({token}) => {
    
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
   
  

    const handleSubmit = async (e) => {
     e.preventDefault();
     
      console.log('title, description, price: ', title, description, price);
     
     
      await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post:{
                title: title,
                description: description,
                price: price,
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

       <input type="text" placeholder="price" value={price} onChange=
        {(e) => setPrice(e.target.value)}></input>


        <button className="btn" type="submit">Submit</button>
      </form>

    </>
  )
}

export default Create

