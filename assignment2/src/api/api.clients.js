import axios from 'axios'

const post = (url,body) => {
  const header = {
    'Content-Type': 'application/json'
  }
  
  try{
    const response = axios.post(url, body, {header,})
    return response
  }catch(error){
    console.log(`Error :${error.message}`) 
  }
}

export{
  post,
}