import React from 'react'
import { useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            Image:"https://ik.imagekit.io/29brs0dsi/image_xwdznYmGy.jpg?updatedAt=1788009397149",
            caption: "no caption"
        }
        {
            _id:"2",
            Image:"https://ik.imagekit.io/29brs0dsi/image_zXWPPaOuo.jpg?updatedAt=1788008781162",
            caption: "hehehe"
        }
    ])



  return (
    <div className='bg-zinc-900 h-[100vh] overflow-scroll w-[100vw] flex flex-col gap-5 items-center'>
{/* {
    posts.length > 0 ? (
        posts.map( (post) => (
            <div className='bg-black/80 m-3 text-white rounded-md overflow-hidden'  key={post._id}>
                <img className='w-[100%]' src={post.Image} />
                <p className='py-3 px-3'>{post.caption}</p>
            </div>
        ))
    ) : (
        <h1>posts noy avlable</h1>
    )
} */}

    </div>
  )}

export default Feed;