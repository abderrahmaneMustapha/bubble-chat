import React from 'react';
import { Message } from '../common/types';
import styles from './bubble.module.css';

type ChatBubbleComponentProps = {
  title: string;
  avatar: string;
  accentColor: string;
  currentUser: string;
  messages: Message[];
  isExpanded: boolean;
  message: string;
  position: { x: number; y: number };
  msgInputPlaceholder?: string;
  onSendMessage: () => void;
  onToggleExpand: () => void;
  onMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAudioSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ChatBubbleComponent: React.FC<ChatBubbleComponentProps> = ({
  title,
  avatar,
  accentColor,
  currentUser,
  messages,
  isExpanded,
  message,
  position,
  msgInputPlaceholder = "Type a message...",
  onSendMessage,
  onToggleExpand,
  onMessageChange,
  onImageSelection,
  onAudioSelection
}) => {
  return (
    <div  className={styles.container} style={{ top: position.y, left: position.x }}>
      {isExpanded ? (
        <div className={styles.expandedBubble} >
          <button onClick={onToggleExpand}  className={styles.closeButton}  style={{ right: document.documentElement.dir === 'rtl' ? '90%' : '5px'}}>&times;</button>
          <div className={styles.header}  style={{ backgroundColor: accentColor }}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={styles.message}
                style={{ 
                  textAlign: msg.sender === currentUser ? 'right' : 'left',
                  backgroundColor: msg.sender === currentUser ? '#3498db' : '#e1e1e1',
                  alignSelf: msg.sender === currentUser ? 'flex-end' : 'flex-start',
                  marginLeft: msg.sender === currentUser ? '20%' : '0',
                  marginRight: msg.sender === currentUser ? '0' : '20%',
                }}
              >
                <span className={styles.senderName} style={{ 
                  color: msg.sender === currentUser ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)',
                }}>
                  {msg.sender}
                </span>
                {msg.type === 'text' && <p className={styles.textMessage} style={{ color: msg.sender === currentUser ? 'white' : 'black' }}>{msg.content}</p>}
                {msg.type === 'image' && <img src={msg.content} alt="sent content" className={styles.sentImage} />}
                {msg.type === 'voice' && <audio controls src={msg.content} className={styles.sentAudio}></audio>}
              </div>
            ))}
          </div>
         <div className={styles.inputContainer}>
  
          <div className={styles.fileInputs}>
            <input 
              type="file" 
              accept="image/*" 
              className={styles.hiddenFileInput}
              id="imageInput" 
              onChange={onImageSelection}
            />
            <label htmlFor="imageInput" className={styles.fileLabels}>
              📷
            </label>
            
            <input 
              type="file" 
              accept="audio/*" 
              style={{ display: 'none' }} 
              id="audioInput" 
              onChange={onAudioSelection}
            />
            <label htmlFor="audioInput" className={styles.fileLabels}>
              🎤
            </label>
          </div>
          
          <div className={styles.textMessageContainer}>
            <input 
              type="text" 
              value={message} 
              onChange={onMessageChange} 
              placeholder={msgInputPlaceholder}
              className={styles.textInput}
            />
            <button 
              onClick={onSendMessage} 
              className={styles.sendMessageButton}
            >
            { document.documentElement.dir === 'rtl' ? '˂' : '˃' }
            </button>
          </div>
        </div>

        </div>
      ) : (
        <div onClick={onToggleExpand} style={{ backgroundColor: accentColor }} className={styles.collapsedBubble}>
          <img src={avatar} alt="avatar" className={styles.collapsedBubbleImage} />
        </div>
      )}
    </div>
  );
};

export default ChatBubbleComponent;