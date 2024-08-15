 
import react_js from "/src/assets/images/wordpresss.png";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowsPointingOutIcon, ChartPieIcon, ChatBubbleLeftRightIcon, PencilSquareIcon, RectangleGroupIcon, ShieldExclamationIcon, UserCircleIcon } from '@heroicons/react/20/solid'

function About_me() {
  return (

    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Wordpress expertise</h1>
              <p className="pt-10 text-center animate-flip-down animate-once text-slate-950 dark:text-slate-200">

              I am writing to express my interest in collaborating with your company as a freelancer. With over 4 years
               of experience in creating websites using the WordPress CMS, I have successfully completed several projects
                both as part of a team and independently.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src={react_js}
            // className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            className="h-72"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Themes and Plugins</strong> : Proficient in creating 
                    websites autonomously, purchasing themes on Themeforest, and utilizing necessary plugins.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Hosting and Domains</strong> : Experienced in managing hosting, domains, and databases with Webempresa.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">	File Management</strong>: Skilled in handling files via FTP with FileZilla.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowsPointingOutIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Visual Modelers</strong>: Expert in using Elementor Pro, Avada, Divi Builder, and Gutenberg.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChartPieIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Design Collaboration</strong>: Collaborate with designers using Figma and Adobe XD.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChatBubbleLeftRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Translations</strong>: Utilize WPML for multilingual sites.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PencilSquareIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Advanced Plugins</strong>: Proficient with Jet Engine and the Crocoblok suite for medium to large projects.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RectangleGroupIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Site Migrations</strong>: Efficient in project migrations using All in One Migration.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldExclamationIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Other Plugins</strong>: Experience with Slider Revolution, WP Mail SMTP for mail server management, WooCommerce, YayCommerce for multiple currencies, and Dokan for multi-vendor setups.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Social media and Messaging</strong>: Manage social networks and messaging clients such as WhatsApp.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              I am writing to express my interest in collaborating with your company as a 
              freelancer. With over 4 years of experience in creating websites using the WordPress CMS,
               I have successfully completed several projects both as part of a team and independently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About_me