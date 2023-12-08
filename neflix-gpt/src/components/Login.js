import { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggeSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bg-img'/>

      </div>
      <form 
       className="absolute w-3/12 p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80 ">
        
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        <input 
          type='text'
          placeholder="Email Address" 
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-50"
        />
        {!isSignInForm &&  <input 
          type='text'
          placeholder=" Full Name" 
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-50"
        />}
       
        <input
         type="password" 
         placeholder="Password" 
         className="p-4 my-4 w-full bg-gray-700 bg-opacity-60"
        />
        <button 
         className="p-4 my-6 w-full bg-red-700 rounded-xl">
          Sign In
        </button>
        <p className="py-4" onClick={toggeSignInForm}>
          {isSignInForm 
          ? "New to Netflix ? Sign Up Now"
          : "Already registered? Sign In Now. "  
          }
          
        </p>
      </form>



    </div>
  )
}

export default Login