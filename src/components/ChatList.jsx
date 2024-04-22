import React from 'react';
import { Link } from 'react-router-dom';
import '../../ChatList.css';
import avatarSvg from '../assets/profile-add-svgrepo-com.svg';
import TopNavbar from './TopNavBar';
import BottomNavBar from './BottomNavBar';

const ChatList = () => {
  // Dummy data for chat list
  const chatData = [
    {
      id: 1,
      avatar: avatarSvg,
      name: 'John Doe',
      message: 'Hey there!',
      time: '10:00 AM',
      active: true,
    },
    {
      id: 2,
      avatar: avatarSvg,
      name: 'Jane Smith',
      message: 'Hi John!',
      time: '10:05 AM',
      active: false,
    },
    {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },

     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
     {
      id: 3,
      avatar: avatarSvg,
      name: 'Mosh',
      message: 'Hey buddy',
      time: '10:15 AM',
      active: false,
    },
    
    // Add more dummy data...
  ];

  return (
    <div>
      <TopNavbar />
        <div className='chats-l'>
               <h2 className='chat-l'>Chat List</h2>

        </div>
      <div className='chat-container'>
      
        <div className='chat-list'>
                  <input type='text' placeholder='Search....' className='searchx' />

          {chatData.map(chat => (
            <Link to={`/chat/${chat.id}`} key={chat.id} className='chat-linkx' style={{ textDecoration: 'none' }}>
              <div className={`chat ${chat.active ? 'active' : ''}`}>
                <img src={chat.avatar} alt='Avatar' className='avatar' />
                <div className='status'>{chat.active ? '● Active' : '○'}</div>
                <div className='chat-info'>
                  <div className='name'>{chat.name}</div>
                  <div className='message'>{chat.message}</div>
                </div>
                <div className='time'>{chat.time}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default ChatList;
