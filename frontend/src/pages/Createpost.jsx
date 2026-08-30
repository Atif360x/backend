import React from 'react'

const Createpost = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-zinc-900 flex flex-col text-white p-10 items-center justify-center gap-5'>
        <h1 className='text-2xl font-[Arial] font-bold'>
            Create Post
        </h1>
        <form className='flex flex-col items-center gap-3 text-xs py-5 rounded-4xl bg-black/30'>
            <input type='file' className='border border-white/30 w-[90%] rounded-4xl p-10' name='image' accept='image/*' />
            <input type='text' className='border border-white/30 w-[90%] rounded-4xl py-5 px-3' placeholder='add a caption' name='caption' required />
            <button type='submit' className='bg-blue-500 w-[90%] py-3 rounded-full'>post</button>
        </form>
    </div>
  )
  

}

export default Createpost