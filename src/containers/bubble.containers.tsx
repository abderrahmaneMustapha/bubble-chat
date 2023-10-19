import React, { useState } from 'react';
import BubbleComponent from '../components/bubble.components';
import { Message } from '../common/types';

type ChatBubbleContainerProps = {
  title: string;
  avatar: string;
  accentColor: string;
  currentUser: string;
  msgInputPlaceholder?: string;
  messages: Message[];
};

const ChatBubbleContainer: React.FC<ChatBubbleContainerProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [, setSelectedImage] = useState<File | null>(null);
  const [,setSelectedAudio] = useState<File | null>(null);

  const handleSendMessage = () => {
    console.log('Sending message:', message);
    setMessage('');
  };

  const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log('Image selected:', e.target.files[0]);
    }
  };

  const handleAudioSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedAudio(e.target.files[0]);
      console.log('Audio selected:', e.target.files[0]);
    }
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
        onAudioSelection={handleAudioSelection}
        onImageSelection={handleImageSelection}
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