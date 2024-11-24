'use client';
import { useState, useEffect } from 'react';
import styles from './ChatRoom.module.css';
import Image from 'next/image';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'me' | 'other';
  time: string;
  image?: string;
  fileName?: string;
}

interface ChatRoomProps {
  selectedChatId: string | null;
  selectedChat?: {
    id: string;
    name: string;
    status: string;
    time: string;
    code: string;
    image: string;
  };
}

export default function ChatRoom({ selectedChatId, selectedChat }: ChatRoomProps) {
  console.log('ChatRoom props:', { selectedChatId, selectedChat });

  const defaultMessage = {
    id: '1',
    text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    sender: 'other',
    time: '8:00 PM'
  };

  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>({});

  useEffect(() => {
    if (selectedChatId && !chatMessages[selectedChatId]) {
      setChatMessages(prev => ({
        ...prev,
        [selectedChatId]: [defaultMessage]
      }));
    }
  }, [selectedChatId]);

  const handleSendMessage = () => {
    if (!message.trim() || !selectedChatId) return;
    
    const newMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages(prev => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMessage]
    }));
    setMessage('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedChatId) return;

    // 이미지 파일인 경우
    if (file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      const newMessage = {
        id: Date.now().toString(),
        text: '',
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        image: imageUrl,
        fileName: file.name
      };

      setChatMessages(prev => ({
        ...prev,
        [selectedChatId]: [...(prev[selectedChatId] || []), newMessage]
      }));
    } else {
      // 다른 타입의 파일인 경우
      const newMessage = {
        id: Date.now().toString(),
        text: `📎 ${file.name}`,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        fileName: file.name
      };

      setChatMessages(prev => ({
        ...prev,
        [selectedChatId]: [...(prev[selectedChatId] || []), newMessage]
      }));
    }
  };

  if (!selectedChatId) {
    return <div className={styles.empty}>Select a chat to start messaging</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <Image
            src={selectedChat?.image || "/avatars/doctor1.jpg"}
            alt={selectedChat?.name || "User"}
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.name}>{selectedChat?.name || "Select a chat"}</span>
          <span className={styles.code}>{selectedChat?.code}</span>
        </div>
        <div className={styles.actions}>
          <button 
            className={styles.iconButton}
            onClick={() => alert('This chat feature is created with mock data.')}
          >ℹ️</button>
        </div>
      </div>
      
      <div className={styles.messages}>
        {chatMessages[selectedChatId]?.map((msg) => (
          <div 
            key={msg.id}
            className={`${styles.message} ${msg.sender === 'me' ? styles.sent : styles.received}`}
          >
            <div className={styles.messageContent}>
              {msg.image ? (
                <img 
                  src={msg.image} 
                  alt={msg.fileName}
                  className={styles.uploadedImage}
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
                />
              ) : (
                msg.text
              )}
              <span className={styles.messageTime}>{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <label className={styles.attachButton}>
          📎
          <input
            type="file"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
            accept="image/*,.pdf,.doc,.docx,.txt"
          />
        </label>
        <button 
          className={styles.sendButton}
          onClick={handleSendMessage}
        >➤</button>
      </div>
    </div>
  );
} 