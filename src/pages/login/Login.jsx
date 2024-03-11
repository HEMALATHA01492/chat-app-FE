import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [ email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loading, login} = useLogin();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await login(email,password);
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <h1 className='text-3xl font-semibold text-center text-gray-300 m-3'> Login 
            <span className='text-blue-200'> Chats </span></h1>
            <form className='font-bold text-2xl' onSubmit={handleSubmit}>
                <div >
                    <label className='label p-2'>
                        <span className='text-base label-text'>Email</span>
                    </label>
                    <input type='text' placeholder='Enter email' 
                    className='w-full input input-bordered h-10' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='text' placeholder='Enter password' 
                    className='w-full input input-bordered h-10'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div>
                    <button                 
                    className='btn btn-block btn-sm mt-4 hover:btn-primary' 
                    disabled={loading}>
                        {loading? <span className='loading loading-spinner'></span>:"Login"}


                    </button>
                </div>
                <Link to='/signup' className='text-sm hover:underline hover:text-blue-800 mt-4 inline-block text-gray-200'>
                    Don't have an account?
                </Link>
                
            </form>
        </div>

    </div>
  )
}

export default Login;