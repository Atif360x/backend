import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/post", formData)
    .then((res) => {
        navigate('/');
    })
    .catch((err) => {
      console.log(err)
      alert("Error creating post")
    })
  }

  return (
    <div className='h-[100vh] w-[100vw] bg-zinc-900 flex flex-col text-white p-10 items-center justify-center gap-5'>
        <h1 className='text-2xl font-[Arial] font-bold'>
            Create Post
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3 text-xs py-5 rounded-4xl bg-black/30'>
            <input type='file' className='border border-white/30 w-[90%] rounded-4xl p-10' name='image' accept='image/*' />
            <input type='text' className='border border-white/30 w-[90%] rounded-4xl py-5 px-3' placeholder='add a caption' name='caption' required />
            <button type='submit' className='bg-blue-500 w-[90%] py-3 rounded-full'>post</button>
        </form>
        <a href='/' className='text-md font-[sarif] active:text-white/40'>
          view feed
        </a>
    </div>
  )
  

}

export default Createpost