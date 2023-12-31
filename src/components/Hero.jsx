import Link from "next/link";




const Hero = () => {
  return (
    <>
        {/* <!-- Hero --> */}
<div className=" bg-slate-200">
  <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
      {/* <!-- Announcement Banner --> */}
   
      {/* <!-- End Announcement Banner --> */}

      {/* <!-- Title --> */}
      <div className="max-w-3xl text-center mx-auto">
        <h1 className="block font-medium text-gray-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome To Our Blog
        </h1>
      </div>
      {/* <!-- End Title --> */}

      <div className="max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-500">Our blog is a regularly updated website where new content is frequently published, typically written in an informal or conversational style.</p>
      </div>

      {/* <!-- Buttons --> */}
      <div className="text-center">
        <Link href="/posts" legacyBehavior>
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" >
          
            Check Out Our Posts 
          
            
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </Link>
      </div>
      {/* <!-- End Buttons --> */}
    </div>
  </div>
</div>
{/* <!-- End Hero --> */}

    </>
  )
}

export default Hero
