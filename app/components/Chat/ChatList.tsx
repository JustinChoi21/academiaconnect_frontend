'use client';
import { useState } from 'react';
import styles from './ChatList.module.css';
import Image from 'next/image';

interface ChatListProps {
  onSelectChat: (chatId: string) => void;
}

export default function ChatList({ onSelectChat }: ChatListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const mockChats = [
    {
      id: '1',
      name: 'Dr. Emily Johnson',
      status: 'Wait',
      time: '00:31:00',
      code: '#CU6798H',
      image: '/avatars/doctor1.jpg'
    },
    // Add more mock data as needed
  ];

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
          <button className={styles.chatButton}>CHAT +</button>
        </div>
      </div>
      <div className={styles.chatList}>
        {mockChats.map((chat) => (
          <div 
            key={chat.id}
            className={styles.chatItem}
            onClick={() => onSelectChat(chat.id)}
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