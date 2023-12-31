import React from 'react'


// it should be here in layoud instead of page to take the whole articles nested routes
export const metadata = {
    title:"articles page",
}



const layout = ({children}) => {
  return (
    <>
      <h1 className='text-4xl bg-teal-400 '>articles BASE layout</h1>
      
      <div className='p-10 bg-pink-300 mt-10'>
        {children}
      </div>
      
    </>
  )
}

export default layout
