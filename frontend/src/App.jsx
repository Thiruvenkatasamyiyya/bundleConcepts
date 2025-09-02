import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [data,setData] = useState()

  axios.get('http://localhost:3000/')
  .then(response =>{
    setData(response.data.message)
    
  })
  return (
    <div>
      <h1 className='text-3xl font-bold '>hello from tailwind for bundle</h1>
      <p className='font-bold text-2xl '>{data}</p>
    </div>
  )
}

export default App