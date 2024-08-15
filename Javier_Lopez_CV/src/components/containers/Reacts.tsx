// import react_js from "/src/assets/images/react.png";
import { ChartPieIcon, CloudArrowUpIcon, HeartIcon, LightBulbIcon, LockOpenIcon, ReceiptRefundIcon, ServerIcon, ShareIcon, Square2StackIcon, WindowIcon } from '@heroicons/react/20/solid'
function Reacts() {
  return (

    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">React Js expertise</h1>

            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
              To obtain a challenging Frontend/Software Designer position where my creativity, 
              problem-solving skills, and experience in designing engaging and user-friendly 
              interfaces can be utilized to enhance user experiences and drive business objectives.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Development Tools :</strong> Utilize Vite and Create 
                    React App for project compilation.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChartPieIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Styling :</strong> Proficient in Tailwind CSS for styling.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Deployments :</strong> Deploy and preview projects using Vercel.
                  </span>
                </li>

                <li className="flex gap-x-3">
                <HeartIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Interface Development :</strong> Develop interfaces using Figma and Adobe XD.
                  </span>
                </li>

                <li className="flex gap-x-3">
                <LightBulbIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">State Management :</strong> Expert in useState, useEffect, useContext, Redux Toolkit, and Redux Persist for state management.
                  </span>
                  </li>

                  <li className="flex gap-x-3">
                  <LockOpenIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Async Storage :</strong> Handle async storage efficiently.
                  </span>
                   </li>

                   <li className="flex gap-x-3">
                   <ReceiptRefundIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Routing :</strong> Manage routing and navigation with React Router.
                  </span>
                  </li>

                  <li className="flex gap-x-3">
                  <ShareIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">API Integration :</strong> Perform API calls using fetch and Axios, and test APIs with Postman.
                  </span>
                  <li/>
                </li>
                <li className="flex gap-x-3">
                  <Square2StackIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Form Handling:</strong> Use React Hook Form for form handling.
                  </span>
                  </li>
                  
                  <li className="flex gap-x-3">
                  <WindowIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Advanced Techniques :</strong> Studying Suspense, Lazy Loading, and Portals. Currently developing a project with Next.js.
                  </span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Reacts