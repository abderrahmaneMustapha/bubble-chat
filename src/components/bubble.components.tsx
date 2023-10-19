import React from 'react';
import { Message } from '../common/types';

type ChatBubbleComponentProps = {
  title: string;
  avatar: string;
  accentColor: string;
  currentUser: string;
  messages: Message[];
  isExpanded: boolean;
  message: string;
  position: { x: number; y: number };
  onSendMessage: () => void;
  onToggleExpand: () => void;
  onMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  onSendMessage,
  onToggleExpand,
  onMessageChange,
}) => {
  return (
    <div style={{ position: 'absolute', top: position.y, left: position.x }}>
      {isExpanded ? (
        <div style={{ minWidth: '300px', maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)', position: 'relative'}}>
          <button onClick={onToggleExpand} style={{ position: 'absolute', top: '5px', right: '5px', backgroundColor: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#aaa' }}>&times;</button>
          <div style={{ backgroundColor: accentColor, padding: '10px', display: 'flex', alignItems: 'center', borderRadius: '20px 20px 0 0', marginBottom: '10px' }}>
            <img src={avatar} alt="avatar" style={{ width: '40px', borderRadius: '50%', border: '2px solid white' }} />
            <h2 style={{ marginLeft: '10px', color: 'white' }}>{title}</h2>
          </div>
          {messages.map((msg, index) => (
            <div 
              key={index} 
              style={{ 
                textAlign: msg.sender === currentUser ? 'right' : 'left',
                marginBottom: '10px',
                padding: '8px 12px',
                borderRadius: '15px',
                backgroundColor: msg.sender === currentUser ? '#3498db' : '#e1e1e1',
                alignSelf: msg.sender === currentUser ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                marginLeft: msg.sender === currentUser ? '20%' : '0',
                marginRight: msg.sender === currentUser ? '0' : '20%',
              }}
            >
              <span style={{ 
                fontSize: '10px', 
                fontWeight: 'bold', 
                color: msg.sender === currentUser ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)',
                marginBottom: '5px',
                display: 'block'
              }}>
                {msg.sender}
              </span>
              {msg.type === 'text' && <p style={{ color: msg.sender === currentUser ? 'white' : 'black', margin: 0, fontSize: '16px' }}>{msg.content}</p>}
              {msg.type === 'image' && <img src={msg.content} alt="sent content" style={{ maxWidth: '100%', borderRadius: '10px', marginTop: '5px' }} />}
              {msg.type === 'voice' && <audio controls src={msg.content} style={{ width: '100%', marginTop: '5px' }}></audio>}
            </div>
          ))}
          <div style={{ padding: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: "flex", flexDirection: "row" }}>
            <input type="text" value={message} onChange={onMessageChange} placeholder="Type a message..." style={{ width: '80%', padding: '10px', borderRadius: '20px',  border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'black', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)' }} />
            <button onClick={onSendMessage} style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'black', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)' }}>Send</button>
          </div>
        </div>
      ) : (
        <div onClick={onToggleExpand} style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: accentColor, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)' }}>
          <img src={avatar} alt="avatar" style={{ width: '40px', borderRadius: '50%', border: '2px solid white' }} />
        </div>
      )}
    </div>
  );
};

export default ChatBubbleComponent;