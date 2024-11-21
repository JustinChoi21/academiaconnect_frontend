'use client';
import { useState } from 'react';
import styles from './Chat.module.css';
import ChatList from '../components/Chat/ChatList';
import ChatRoom from '../components/Chat/ChatRoom';

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatList}>
        <ChatList onSelectChat={setSelectedChat} />
      </div>
      <div className={styles.chatRoom}>
        <ChatRoom selectedChatId={selectedChat} />
      </div>
    </div>
  );
} 