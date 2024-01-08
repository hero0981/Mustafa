import React from 'react'

const NavbarComponent = () => {
    return (
      <div>
        
        <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src="https://scontent.flhe3-2.fna.fbcdn.net/v/t1.18169-9/11401191_1560645617515567_3386999346149145114_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=SDbKdmWcXA4AX8QCufG&_nc_ht=scontent.flhe3-2.fna&oh=00_AfCfwELzGnA0Gtm6an-TDEmVHf2lSyxJZwtMWE15HAjPsg&oe=65C3A022" alt="" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-1 bg-green-500 rounded-full" viewBox="0 0 24 24"/> 
        
        <span class="ml-3 text-xl"> Mustafa sheikh</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">Home</a>
        <a class="mr-5 hover:text-gray-900">About</a>
        <a class="mr-5 hover:text-gray-900">Address</a>
        <a class="mr-5 hover:text-gray-900">Products</a>
        
      </nav>
      <button class="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Our Articles
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
      </div>
    )
  }
  
  export default NavbarComponent