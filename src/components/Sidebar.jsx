import React, { useContext } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from '../components/Chats'
import { ChatContext } from '../context/ChatContext'
function Sidebar() {
  const {data} = useContext(ChatContext);
  console.log(data.chatId)
  var flag;
    if(data.chatId===null){
      flag= true;
    }
    else{
      flag = false;
    }

  return (

   <div className='sidebar'>
        <Navbar/>
        <Search/>
        {/* {(flag)?<span>No current chats</span>: */}
        <Chats/>
    </div>
  )
}

export default Sidebar