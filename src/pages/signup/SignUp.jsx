import React, { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [input,setInput] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        gender:''
    });

    const { loading, signup } = useSignup();

    const handlecheckbox = (gender) => {
        setInput({...input,gender})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await signup(input)

    }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-200 m-3">
          {" "}
          Signup
          <span className="text-blue-200"> Chats </span>
        </h1>

        <form className="font-bold text-2xl" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={input.username}
              onChange={(e)=> setInput({...input,username:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full input input-bordered h-10"
              value={input.email}
              onChange={(e)=> setInput({...input,email:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={input.password}
              onChange={(e)=> setInput({...input,password:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={input.confirmPassword}
              onChange={(e)=> setInput({...input,confirmPassword:e.target.value})}
            />
          </div>
          <GenderCheck  onCheckboxChange = {handlecheckbox} selectedGender={input.gender}/>

          <div >
            <button className="btn btn-block btn-sm mt-2 hover:btn-primary" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span>:"Signup"}
            </button>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline text-gray-200 hover:text-blue-800 m-2 inline-block"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
