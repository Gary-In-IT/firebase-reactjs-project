import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from "react-toastify";

export default function Forgotpassword() {
  
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value)
    }

    async function onSubmit(e) {
      e.preventDefault();

      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        toast.success("Check your email for further instructions");        

      } catch (error){
        toast.error("Failed to reset password");
      }

    }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Need New Password?</h1>
      
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="./images/sign-in.png"
            alt="many stacked shipping containers"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email here"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />


            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p className="mb-6 text-green-600">
                Already registered?
                <Link
                  to="/sign-in"
                  className="ml-1 text-red-600 hover:text-red-700"
                >                  
                  Sign in!
                </Link>
              </p>

              <p className="">
                <Link to="/sign-in" className="text-red-600">
                  Sign-in instead
                </Link>
              </p>
            </div>

            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900"
              type="submit">
              Send password reset email
            </button>   

            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-t-gray-400 
             after:border-t after:flex-1 after:border-t-gray-400">

             <p className="text-center font-semibold mx-4">
              OR
             </p>
            </div>

            <OAuth />

          </form>         
        </div>
      </div>
    </section>
  );
}
