"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [photos, setPhotos] = useState([])


    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              const result = await response.json();
              // Update the posts state with the first 10 posts
              setPosts(result.slice(0, 10));
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      fetchData();
  }, []);



    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://jsonplaceholder.typicode.com/photos');
              const result = await response.json();
              // Update the posts state with the first 10 posts
              setPhotos(result.slice(0, 10));
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      fetchData();
  }, []);

  return (
    <div className='grid lg:grid-cols-3 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 '>
        {
            posts.map( (post, id) => {
              
              {/* id for every post = that image of that exact post to avoid looping all imgs over every single post */}
              const postPhoto = photos[id];

               return (
 

                                        
<div key={post.id} class="max-w-[85rem] ">
 
 
    
          {/* <img src={postPhoto?.thumbnailUrl} className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" alt="Image Description"/> */}
      
                      <div class="mb-20 ">
                        {/* <!-- Card --> */}
                        <a class="group   rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                          <div class="sm:flex">
                          <div class="flex-shrink-0 relative mx-auto  rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                {/* <div> */}
                            <Image src={postPhoto?.thumbnailUrl} class="group-hover:scale-105   transition-transform duration-500 ease-in-out w-full h-full absolute top-0  object-cover rounded-xl" layout="fill" alt="image"></Image>
                          </div>
                      </div>

                      <div class="grow text-center mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                        
                       
                          <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                          {post.title}
                          </h3>
                        
                        <p class="mt-3 text-gray-600 dark:text-gray-400">
                          {post.body}
                        </p>
                        <Link href={`/posts/${id}`}>
                          <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                            Read more
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                          </p>
                        </Link>
                      </div>
                      </a>
                      </div>

                  
 {/* <!-- End Grid --> */}
</div>


                )
            })
        }

    </div>
  )
}

export default Posts
