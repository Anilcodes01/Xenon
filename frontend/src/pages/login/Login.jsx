import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center min-w-80 mx- justify-centera">
      <div className="w-full p-6 bg-opacity-0 rounded-lg justify-center items-center shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-2xl ">
          <span className="text-2xl font-bold mb-4">Login</span>
        </h1>

        <form className="flex justify-center items-center w-full">
          <div className="flex flex-col mt-6 justify-center w-full items-center">
            <label className="text-sm mb-1 ml-1 mr-56 font-mono">Username</label>
            <input
              className="p-1 w-full rounded-lg outline-none text-white"
              type="text"
              placeholder="Enter your username"
            />
            <label className="text-sm mb-1 ml-1 mt-4 mr-56 font-mono">Password</label>
            <input
              className="p-1 w-full rounded-lg outline-none text-white"
              type="text"
              placeholder="Enter your password"
            />
            <button className="text-xl bg-gray-700 text-white mt-4  w-full font-bold hover:bg-gray-800 rounded-lg p-1 ">Login</button>
            <div className="flex text-sm mt-2">
                <p>Don't have an account?</p>
                <a className="hover:text-blue-400 ml-1" href="/signup">Signup</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
