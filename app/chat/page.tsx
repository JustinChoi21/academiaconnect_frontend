'use client';
import { useState } from 'react';
import styles from './Chat.module.css';
import ChatList from '../components/Chat/ChatList';
import ChatRoom from '../components/Chat/ChatRoom';

// Chat 객체의 타입 정의
interface ChatType {
  id: string;
  name: string;
  status: string;
  time: string;
  code: string;
  image: string;
}

export default function Chat() {
  // selectedChat의 타입을 ChatType | null로 변경
  const [selectedChat, setSelectedChat] = useState<ChatType | null>(null);

  return (
    <div className="mainContent">
      <div className={styles.chatContainer}>
        <div className={styles.chatList}>
          <ChatList onSelectChat={setSelectedChat} />
        </div>
        <div className={styles.chatRoom}>
          <ChatRoom 
            selectedChatId={selectedChat?.id || null}
            selectedChat={selectedChat || undefined}
          />
        </div>
      </div>
    </div>
  );
} 