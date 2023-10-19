import React, { useState } from 'react';
import BubbleComponent from '../components/bubble.components';
import { Message } from '../common/types';

type ChatBubbleContainerProps = {
  title: string;
  avatar: string;
  accentColor: string;
  currentUser: string;
  messages: Message[];
};

const ChatBubbleContainer: React.FC<ChatBubbleContainerProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleSendMessage = () => {
    console.log('Sending message:', message);
    setMessage('');
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isDragging) {
      setPosition({ x: e.clientX - startPosition.x, y: e.clientY - startPosition.y });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      style={{ position: 'absolute', top: position.y, left: position.x }}
    >
      <BubbleComponent
        {...props}
        isExpanded={isExpanded}
        message={message}
        position={position}
        onSendMessage={handleSendMessage}
        onToggleExpand={handleToggleExpand}
        onMessageChange={handleMessageChange}
      />
    </div>
  );
};

export default ChatBubbleContainer;