import Posts from '@/components/Posts'



export const metadata = {
    title:"Posts",
}


const posts = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
    {
        // cache: 'no-store',
        cache: 'force-cache',
        // next: {
        //     revalidate: 60 , hy3ed hesabat w yreload b3d 60 seconds
        // }
    }); 
    const postsData = await response.json()
    const posts = postsData.slice(0,10)
    
  
  return (
    <>
     <h1 className='text-4xl text-center mb-20'>posts page</h1> 


      <Posts/>


    </>
  )
}

export default posts




