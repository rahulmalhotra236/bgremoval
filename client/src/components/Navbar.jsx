import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const {isSignedIn, user} = useUser()


  return (
    <div className="flex item-centre justify-between mx-4 py-3 lg:mx-44">
      <Link to={"/"}>
        <img src={assets.logo} className="w-32 sm:w-44 " alt="" />{" "}
      </Link>

      {isSignedIn ? (
        <div>
          <UserButton/>
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex item-centre gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get Started{" "}
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  )
}

export default Navbar