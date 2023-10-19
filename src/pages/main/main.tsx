import { Message } from '../../common/types';
import ChatBubble from '../../containers/bubble.containers';
import LanguageSelectorContaine from '../../containers/lang-selector.containers';

const mockMessages: Message[] = [
  { type: 'text', content: 'Hello!', sender: 'user' },
  { type: 'text', content: 'Hi there!', sender: 'other00' },
  { type: 'image', content: 'https://placehold.co/150', sender: 'other01' },
  { type: 'voice', content: 'http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.mp3', sender: 'user' },
  { type: 'text', content: 'اهلا', sender: 'user09' }
];

function Main() {
  return (
    <div className="App">
      <div className='centered'>
        <LanguageSelectorContaine defaultLanguage={document.documentElement.lang || 'en'} />
      </div>
      
      <ChatBubble 
        currentUser="user" 
        title={document.documentElement.dir === 'ltr' ? "Chat Bubble" : "فقاعة الدردشة" } 
        avatar="https://placehold.co/40" 
        accentColor="#007bff" 
        messages={mockMessages} 
        msgInputPlaceholder={document.documentElement.dir === 'ltr' ? "Type a message..." : "اكتب رسالة..." }
      />
    </div>
  );
}

export default Main;