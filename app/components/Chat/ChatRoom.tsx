'use client';
import { useState } from 'react';
import styles from './ChatRoom.module.css';
import Image from 'next/image';

interface ChatRoomProps {
  selectedChatId: string | null;
}

export default function ChatRoom({ selectedChatId }: ChatRoomProps) {
  const [message, setMessage] = useState('');

  const mockMessages = [
    {
      id: '1',
      text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
      sender: 'other',
      time: '8:00 PM'
    },
    // Add more mock messages
  ];

  if (!selectedChatId) {
    return <div className={styles.empty}>Select a chat to start messaging</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <Image
            src="/avatars/doctor1.jpg"
            alt="User"
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.name}>Dr. Emily Johnson</span>
          <span className={styles.code}>#CU6798H</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.iconButton}>📞</button>
          <button className={styles.iconButton}>🎥</button>
          <button className={styles.iconButton}>ℹ️</button>
        </div>
      </div>
      
      <div className={styles.messages}>
        {mockMessages.map((msg) => (
          <div 
            key={msg.id}
            className={`${styles.message} ${msg.sender === 'me' ? styles.sent : styles.received}`}
          >
            <div className={styles.messageContent}>
              {msg.text}
              <span className={styles.messageTime}>{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Digite a mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={styles.attachButton}>📎</button>
        <button className={styles.sendButton}>➤</button>
      </div>
    </div>
  );
} 