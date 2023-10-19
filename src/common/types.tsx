type MessageType = 'text' | 'image' | 'voice';
type Message = {
  type: MessageType;
  content: string;
  sender: string;
}

export type { Message, MessageType }
