import { useState } from "react";
import "../components/Modal/profilemodal.css";


function Login() {
    const [logIn, setLogIn] = useState(false);
    const [signUp, setSignUp] = useState(false)

    const toggleModal = () => {
        setLogIn(!logIn);
      };

      const toggleSignUpModal = () => {
        setSignUp(!signUp);
      };

    return(
        <>
        <div className="pt-60 space-y-4">
            <button onClick={toggleModal} className="btn-modal bg-blue-300 py-1 px-2 shadow-l rounded-md hover:bg-blue-400">
                Login
            </button>
            <button onClick={toggleSignUpModal} className="btn-modal bg-blue-300 py-1 px-2 shadow-l rounded-md hover:bg-blue-400">
                Sign-up
            </button>
        </div>

      {logIn && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="flex flex-col items-center">
                <img className="w-28 h-28" src="./public/tquest.png" alt="Talent Quest Logo" />
                    <h4 className="pt-4 font-semibold">Start your search by logging in:</h4>
                    <h3 className='text-center pt-2'>Username:</h3>
                    <input type="text" className='w-60 text-center shadow-l rounded-sm ' placeholder="Username" />
                    <h3 className='text-center pt-2'>Password:</h3>
                    <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Password" />
                    <h3 className="pt-4"></h3>
                    <button type="submit" className="bg-gray-400 py-1 px-2 shadow-l rounded-md hover:bg-gray-500">Login</button> 
                </div>
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      )}

    {signUp && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <div className="flex flex-col items-center">
                <img className="w-28 h-28" src="./public/tquest.png" alt="Talent Quest Logo" />
                    <h4 className="pt-4">Sign up now:</h4>
                    <h3 className='text-center pt-2'>Email:</h3>
                        <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Email" />
                    <h3 className='text-center pt-2'>Username:</h3>
                        <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Username" />
                    <h3 className='text-center pt-2'>Profession:</h3>
                        <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Profession" />
                    <h3 className='text-center pt-2'>Password:</h3>
                        <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Password" />
                    <h3 className="pt-4"></h3>
                        <button type="submit" className="bg-gray-400 py-1 px-2 shadow-l rounded-md hover:bg-gray-500">Sign Up</button> 
                </div>
            <button className="close-modal" onClick={toggleSignUpModal}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;