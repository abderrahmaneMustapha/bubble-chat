import { Message } from '../../common/types';
import ChatBubble from '../../containers/bubble.containers';

const mockMessages: Message[] = [
  { type: 'text', content: 'Hello!', sender: 'user' },
  { type: 'text', content: 'Hi there!', sender: 'other00' },
  { type: 'image', content: 'https://placehold.co/150', sender: 'other01' },
  { type: 'voice', content: 'http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.mp3', sender: 'user' }
];

function Main() {
  return (
    <div className="App">
      <ChatBubble currentUser="user" title="Chat Support" avatar="https://placehold.co/40" accentColor="#007bff" messages={mockMessages} />
    </div>
  );
}

export default Main;