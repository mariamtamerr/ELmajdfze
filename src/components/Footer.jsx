import { faPlane, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#9b7b32]">
      <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Grid --> */}
        <div className="text-center">
          <div>
            <a
              href="#"
              className="flex justify-center tracking-widest text-white font-bold text-xl"
            >
              <span>Elmajd FZE LLC</span>
              {/* <span className='ml-2 flex'>
         Diner <FontAwesomeIcon className=' w-5 ml-2' icon={faUtensils}  />
       </span> */}
            </a>
          </div>
          {/* <!-- End Col --> */}

          {/* <!-- Social Brands --> */}
          <div className="mt-5 space-x-2">
            <div class="flex justify-center gap-4">
              <svg
                class="flex-shrink-0 size-6 text-gray-900 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>

              <p class="text- text-gray-800 dark:text-neutral-400 font-bold">
                Sharjah, United Arab Emirates
              </p>
            </div>
            <address class="mt-1 text-gray-800 not-italic dark:text-white">
              Business Centre, Sharjah Publishing
              <br />
              City Free Zone
            </address>

            <div className="email mt-5 font-mono text-slate-800">
            <div class="flex justify-center gap-4">
            <svg class="flex-shrink-0 size-5 text-black dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>

              <a
                class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                href="mailto:example@site.so"
              >
                elmajd.electronic@gmail.com
              </a>
              </div>
            </div>

            <div className="phone mt-5">
            <div class="flex justify-center gap-4">
            <svg class="flex-shrink-0 size-5 text-black dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>

            <a class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="mailto:example@site.so">
                +971 55 308 5148
                </a>

                </div>

            </div>
          </div>
          {/* <!-- End Social Brands --> */}
        </div>
        {/* <!-- End Grid --> */}
      </footer>
    </div>
  );
};

export default Footer;
