
fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts/')
  .then (res => {
    return res.json()
  }
  )
  .then (data => console.log(data))
  .catch(error => console.log("ERROR"))
