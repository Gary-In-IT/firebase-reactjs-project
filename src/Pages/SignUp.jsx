import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useNavigate, useEffect } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = formData;
  const navigate = useNavigate();


  // simple function for determining state
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  // form submit function
  async function onSubmit(e){
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("You are now signed up!");
      navigate("/");      

    } catch (error) {
      toast.error("Nope, ya gotta fill all the boxes!");
    }    
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <p className="text-2l text-center mt-1">
        Sign up now to Sell your Stuff! 
      </p>

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
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email here"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password here"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              />

              {/* this is the logic for the show/hide password */}
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

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
                <Link to="/forgot-password" className="text-red-600">
                  Forgot Password?
                </Link>
              </p>
            </div>

            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900"
              type="submit">
              Sign Up
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
