import React from 'react'
import Searchbar from './Searchbar'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div>
        <Searchbar />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />
        {/* <Conversation />
            <LogoutButton /> */}
    </div>
  )
}

export default Sidebar