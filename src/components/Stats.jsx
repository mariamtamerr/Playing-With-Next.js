import React from 'react'

const Stats = () => {
  return (
    <>
       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1 */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Total users
              </p>
              {/* Add your tooltip logic here */}
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                72,540
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                {/* Your SVG icon and percentage */}
              </span>
            </div>
          </div>
        </div>
        {/* End Card 1 */}

        {/* Card 2 */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Sessions
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                29.4%
              </h3>
            </div>
          </div>
        </div>
        {/* End Card 2 */}

        {/* Card 3 */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Avg. Click Rate
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                56.8%
              </h3>
              <span className="flex items-center gap-x-1 text-red-600">
                {/* Your SVG icon and percentage */}
              </span>
            </div>
          </div>
        </div>
        {/* End Card 3 */}

        {/* Card 4 */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Pageviews
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                92,913
              </h3>
            </div>
          </div>
        </div>
        {/* End Card 4 */}
      </div>
      {/* End Grid */}
    </div>
    {/* End Card Section */}
    </>
  )
}

export default Stats
