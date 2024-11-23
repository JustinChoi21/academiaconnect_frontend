'use client';
import { useState } from 'react';
import styles from './ChatList.module.css';
import Image from 'next/image';

interface ChatListProps {
  onSelectChat: (chat: {
    id: string;
    name: string;
    status: string;
    time: string;
    code: string;
    image: string;
  }) => void;
}

export default function ChatList({ onSelectChat }: ChatListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const mockChats = [
    {
      id: '1', 
      name: 'Dr. Maria Torres',
      status: 'Service',
      time: '00:31:00',
      code: '#CU6799H',
      image: '/implement/chat/profile2.png'
    },
    {
      id: '2',
      name: 'Dr. Laura Patel',
      status: 'Wait',
      time: '00:31:00',
      code: '#CU6800H',
      image: '/implement/chat/profile3.png'
    },
    {
      id: '3',
      name: 'Dr. Rudy Cars',
      status: 'Service',
      time: '00:31:00',
      code: '#CU6801H',
      image: '/implement/chat/profile4.png'
    },
    {
      id: '4',
      name: 'Dr. Sarah Johnson',
      status: 'Wait',
      time: '00:31:00',
      code: '#CU6802H',
      image: '/implement/chat/profile5.png'
    },
    {
      id: '5',
      name: 'Dr. Robert Chang',
      status: 'Wait',
      time: '00:31:00',
      code: '#CU6803H',
      image: '/implement/chat/profile6.png'
    }
  ];

  const filteredChats = mockChats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Messages</h2>
        <div className={styles.searchBar}>
          <input 
            type="text"
            placeholder="Search chat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.chatButton}>Find</button>
        </div>
      </div>
      <div className={styles.chatList}>
        {filteredChats.map((chat) => (
          <div 
            key={chat.id}
            className={styles.chatItem}
            onClick={() => onSelectChat(chat)}
          >
            <Image
              src={chat.image}
              alt={chat.name}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <div className={styles.chatInfo}>
              <div className={styles.nameRow}>
                <span className={styles.name}>{chat.name}</span>
                <span className={styles.time}>{chat.time}</span>
              </div>
              <div className={styles.statusRow}>
                <span className={styles.code}>{chat.code}</span>
                <span className={styles.status}>{chat.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 