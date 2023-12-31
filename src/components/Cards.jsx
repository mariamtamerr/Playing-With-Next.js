import Image from 'next/image';
import one from'../../public/1.jpg'


const Cards = () => {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group flex flex-col h-full  bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            {/* <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl"> */}
            {/* <Image class="w-full object-cover rounded-xl" src={one}  alt="Image Description"></Image> */}
            <Image
  class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"
  width={2070}
  height={1080} // Adjust height accordingly to maintain aspect ratio
></Image>
            {/* </div> */}
            <div className="p-4 md:p-6">
            A compelling introduction to the topic or summary of the blog post content. Engage readers by highlighting the main points or insights they can expect from the post.
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              {/* Action buttons */}
            </div>
          </div>
          {/* End Card 1 */}
  
          {/* Card 2 */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            {/* <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl"> */}
            <Image
  class="w-full object-cover rounded-xl"
  src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
  alt="Image Description"
  width={2070}
  height={1080} // Adjust height accordingly to maintain aspect ratio
></Image>
            {/* </div> */}
            <div className="p-4 md:p-6">
               A compelling introduction to the topic or summary of the blog post content. Engage readers by highlighting the main points or insights they can expect from the post.
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              {/* Action buttons */}
            </div>
          </div>
          {/* End Card 2 */}
  
          {/* Card 3 */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            {/* <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl"> */}
            <Image
  class="w-full object-cover rounded-xl"
  src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
  alt="Image Description"
  width={2070}
  height={1080} // Adjust height accordingly to maintain aspect ratio
></Image>
            {/* </div> */}
            <div className="p-4 md:p-6">
               A compelling introduction to the topic or summary of the blog post content. Engage readers by highlighting the main points or insights they can expect from the post.
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              {/* Action buttons */}
            </div>
          </div>
          {/* End Card 3 */}
        </div>
        {/* End Grid */}
      </div>
     
    );
  };
  
  export default Cards;
  