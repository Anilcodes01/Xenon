import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
   const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
   })

   const {loading, signup} = useSignup()

   const handleCheckBoxChange = (gender) => {
    setInputs({...inputs, gender})
   }

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(inputs)
  
  await signup(inputs)
}


  return (
    <div className="flex flex-col items-center min-w-80 mx- justify-center">
      <div className="w-full p-6 bg-opacity-0 rounded-lg justify-center items-center shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-2xl ">
          <span className="text-2xl font-bold mb-4">Signup</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex justify-center items-start w-full">
          <div className="flex flex-col mt-6 justify-center w-full items-start">
            <label className="text-sm mb-1 ml-1 mr-56 font-mono">Fullname</label>
            <input
              className="p-1 w-full rounded-lg outline-none text-white"
              type="text"
              value={inputs.fullName}
              onChange={(e) => {
                setInputs({...inputs, fullName: e.target.value})
              }}
              placeholder="Enter your Fullname"
            />
            <label className="text-sm mb-1  mt-4 mr-60 font-mono">Username</label>
            <input
              className="p-1 w-full rounded-lg outline-none text-white"
              type="text"
              value={inputs.username}
              onChange={(e) => {
                setInputs({...inputs, username:e.target.value})
              }}
              placeholder="Enter your username"
            />
            <label className="text-sm mb-1 ml-1 mt-4 mr-56 font-mono">Password</label>
            <input
              className="p-1 w-full rounded-lg outline-none text-white"
              type="text"
              value={inputs.password}
              onChange={(e) => {
                setInputs({...inputs, password:e.target.value})
              }}
              placeholder="Enter your password"
            />
            <label className="text-sm mb-1 ml-1 mt-4 mr-56 font-mono">Confirm Password</label>
            <input
              className="p-1 w-full rounded-lg outline-none text-white"
              type="text"
              value={inputs.confirmPassword}
              onChange={(e) => {
                setInputs({...inputs, confirmPassword:e.target.value})
              }}
              placeholder="Enter your password"
            />
           <div>
           <GenderCheckbox onchechkBoxChange = {handleCheckBoxChange} selectedGender={inputs.gender} />
           </div>
            <button disabled={loading} className="text-xl bg-gray-700 text-white mt-4  w-full font-bold hover:bg-gray-800 rounded-lg p-1 ">
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
            <div className="flex text-sm ml-20 justify-center items-center  mt-2">
                <p>Already have an account?</p>
                <a className="hover:text-blue-400 ml-1" href="/login">Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
