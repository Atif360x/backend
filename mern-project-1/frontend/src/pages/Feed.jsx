import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://ik.imagekit.io/29brs0dsi/image_xwdznYmGy.jpg?updatedAt=1788009397149",
            caption: "no caption"
        }
    ])

    useEffect(() =>
    {
        axios.get("http://localhost:3000/feed")
        .then((res) => {
            setPosts(res.data.posts)
        })
    },
    [

    ])



  return (
    <div className='bg-zinc-900 h-full verflow-y-scroll pb-15 pt-5 gap-3 w-[100vw] flex flex-col items-center'>

    <div className='w-full h-[8vh] bg-black/5 bottom-0 backdrop-blur fixed '>
    <a href='/post' className='w-full h-full flex justify-center items-center'>
        <button className='bg-blue-500 active:bg-blue-400 border active:text-black border-black h-[80%] text-white font-bold font-[Arial] w-[60%] py-3 rounded-full'>
            create a post
        </button>
    </a>
        
    </div>

    <div className='flex flex-col-reverse w-full items-center gap-3 justiy-'>
{
    posts.length > 0 ? (
        posts.map( (post) => (
            <div className='bg-black/80 w-[95vw] md:w-[50vw] shrink-0 text-white rounded-md overflow-hidden'  key={post._id}>
                <img className='w-[100%]' src={post.image} />
                <p className='py-3 px-3'>{post.caption}</p>
            </div>
        ))
    ) : (
        <div className='flex h-[100vh] justify-center items-center text-white font-[Arial]'>
            no posts yet
        </div>
    )
}   
    </div>

    </div>
  )}

export default Feed;