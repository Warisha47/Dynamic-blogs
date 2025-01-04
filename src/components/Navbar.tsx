import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
<header className="text-gray-600  bg-blue-300 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <h1 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-3xl font-bold">Blogs</span>
    </h1>
    <nav className="md:ml-auto md:mr-auto flex  flex-wrap items-center text-base justify-center hover:to-blue-800">
      <Link href='/' className="mr-5 hover:text-gray-900 font-bold">Home</Link>
      <Link href='/about'  className="mr-5 hover:text-gray-900 font-bold"> About</Link>
     
    </nav>
  
  </div>
</header>

    </div>
  )
}

export default Navbar





