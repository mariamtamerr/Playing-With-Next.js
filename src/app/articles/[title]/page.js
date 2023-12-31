import React from 'react'

const showArticleDetail = (props) => {
    console.log("props : " , props);
  return (
    <>
    <h1 className='text-4xl'>showArticleDetail</h1>

    <h1 className='text-4xl'>{props.params.title}</h1>
    <h1 className='text-4xl'>{props.params.searchParams}</h1>
    </>
  )
}

export default showArticleDetail
