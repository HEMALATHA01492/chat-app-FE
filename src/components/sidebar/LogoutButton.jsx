import React from 'react';
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading , logout} = useLogout();
  return (
    <div className='m-5 mt-10'>
      {!loading ? (            
      <TbLogout2 className='w-8 h-8 text-white cursor-pointer'
      onClick={logout}/>
      ):(
        <span className='loading loading-spinner'></span>
      )
        
      }
    </div>
  )
}

export default LogoutButton;