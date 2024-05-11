import React from 'react'

function Loading() {
  return (
    <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
      <span className="loading loading-spinner loading-lg text-4xl text-skyBlue-500"></span>
    </div>
  )
}

export default Loading
